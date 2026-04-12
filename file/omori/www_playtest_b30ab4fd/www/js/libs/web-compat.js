/* eslint-disable no-console */
(function() {
  'use strict';

  if (window.__OMORI_WEB_COMPAT__) return;
  window.__OMORI_WEB_COMPAT__ = true;

  var protocol = window.location.protocol || 'http:';
  var host = window.location.host || '';
  var origin = window.location.origin || (protocol + '//' + host);
  var currentPath = String(window.location.pathname || '/').replace(/\\/g, '/');
  var baseDir = currentPath.replace(/\/[^\/]*$/, '');
  var storagePrefix = 'omori-webfs:';
  var reTrailingSlash = /\/+$/;
  var fsExistsCache = {};
  var fsTextCache = {};
  var moduleMap = {};

  function normalizeSlashes(value) {
    return String(value || '').replace(/\\/g, '/');
  }

  function stripQuery(value) {
    return String(value || '').split('?')[0].split('#')[0];
  }

  function ensureMappedPath(value) {
    var p = normalizeSlashes(value);
    p = p.replace(/\.KEL$/i, '.json');
    p = p.replace(/\.PLUTO$/i, '.yaml');
    p = p.replace(/\.HERO$/i, '.yaml');
    p = p.replace(/\.AUBREY$/i, '.json');
    return p;
  }

  function normalizePathSegments(path) {
    var input = normalizeSlashes(path);
    var isAbsolute = input.charAt(0) === '/' || /^[A-Za-z]:\//.test(input);
    var parts = input.split('/');
    var out = [];
    for (var i = 0; i < parts.length; i++) {
      var part = parts[i];
      if (!part || part === '.') continue;
      if (part === '..') {
        if (out.length) out.pop();
        continue;
      }
      out.push(part);
    }
    var prefix = '';
    if (/^[A-Za-z]:\//.test(input)) {
      prefix = input.slice(0, 2);
    } else if (isAbsolute) {
      prefix = '/';
    }
    return prefix + out.join('/');
  }

  function dirname(path) {
    var p = normalizeSlashes(path);
    if (!p) return '.';
    p = p.replace(reTrailingSlash, '');
    var idx = p.lastIndexOf('/');
    if (idx < 0) return '.';
    if (idx === 0) return '/';
    return p.slice(0, idx);
  }

  function extname(path) {
    var p = normalizeSlashes(path);
    var base = p.slice(p.lastIndexOf('/') + 1);
    var idx = base.lastIndexOf('.');
    if (idx <= 0) return '';
    return base.slice(idx);
  }

  function basename(path, ext) {
    var p = normalizeSlashes(path);
    var b = p.slice(p.lastIndexOf('/') + 1);
    if (ext && b.slice(-ext.length) === ext) {
      return b.slice(0, -ext.length);
    }
    return b;
  }

  function joinPath() {
    var raw = [];
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] === undefined || arguments[i] === null) continue;
      raw.push(String(arguments[i]));
    }
    return normalizePathSegments(raw.join('/'));
  }

  function isSavePath(path) {
    return /(^|[\/\\])save([\/\\]|$)/i.test(String(path || ''));
  }

  function pathToUrl(pathLike) {
    var p = ensureMappedPath(stripQuery(pathLike));
    p = normalizeSlashes(p);

    if (/^https?:\/\//i.test(p)) return p;

    if (/^[A-Za-z]:\//.test(p)) {
      var idxWww = p.toLowerCase().indexOf('/www/');
      if (idxWww >= 0) {
        p = p.slice(idxWww);
      } else {
        return '';
      }
    }

    if (p.charAt(0) !== '/') {
      p = joinPath(baseDir, p);
      if (p.charAt(0) !== '/') p = '/' + p;
    }

    return origin + p;
  }

  function parseDirectoryListing(html) {
    var out = [];
    var seen = {};
    var source = String(html || '');
    var re = /href="([^"]+)"/gi;
    var match;
    while ((match = re.exec(source))) {
      var href = decodeURIComponent(match[1] || '');
      if (!href || href === '../') continue;
      var clean = href.split('?')[0].split('#')[0];
      clean = clean.replace(reTrailingSlash, '');
      var name = clean.slice(clean.lastIndexOf('/') + 1);
      if (!name || seen[name]) continue;
      seen[name] = true;
      out.push(name);
    }
    return out;
  }

  function xhrGet(url, sync) {
    var xhr = new XMLHttpRequest();
    try {
      xhr.open('GET', url, !sync);
      xhr.overrideMimeType('text/plain; charset=utf-8');
      if (sync) {
        xhr.send();
        if ((xhr.status >= 200 && xhr.status < 400) || xhr.status === 0) {
          return { ok: true, text: xhr.responseText || '' };
        }
        return { ok: false, status: xhr.status || 0 };
      }
      return xhr;
    } catch (e) {
      return sync ? { ok: false, error: e } : null;
    }
  }

  function makeBuffer(value) {
    var text = value == null ? '' : String(value);
    return {
      _text: text,
      length: text.length,
      slice: function(start, end) {
        return makeBuffer(text.slice(start, end));
      },
      toString: function() {
        return text;
      }
    };
  }

  function readTextSync(pathLike) {
    var normalized = ensureMappedPath(pathLike);
    if (isSavePath(normalized)) {
      var saveValue = localStorage.getItem(storagePrefix + normalizeSlashes(normalized));
      if (saveValue == null) {
        var missing = new Error('ENOENT: no such file or directory, open ' + normalized);
        missing.code = 'ENOENT';
        throw missing;
      }
      return saveValue;
    }

    var cacheKey = normalizeSlashes(normalized);
    if (Object.prototype.hasOwnProperty.call(fsTextCache, cacheKey)) {
      return fsTextCache[cacheKey];
    }

    var url = pathToUrl(normalized);
    if (!url) {
      var invalid = new Error('ENOENT: invalid path ' + normalized);
      invalid.code = 'ENOENT';
      throw invalid;
    }
    var res = xhrGet(url, true);
    if (!res.ok) {
      var err = new Error('ENOENT: no such file or directory, open ' + normalized);
      err.code = 'ENOENT';
      throw err;
    }
    fsTextCache[cacheKey] = res.text;
    return res.text;
  }

  function readTextAsync(pathLike, callback) {
    var normalized = ensureMappedPath(pathLike);
    if (isSavePath(normalized)) {
      setTimeout(function() {
        var saveValue = localStorage.getItem(storagePrefix + normalizeSlashes(normalized));
        if (saveValue == null) {
          var saveErr = new Error('ENOENT: no such file or directory, open ' + normalized);
          saveErr.code = 'ENOENT';
          callback(saveErr);
        } else {
          callback(null, saveValue);
        }
      }, 0);
      return;
    }

    var cacheKey = normalizeSlashes(normalized);
    if (Object.prototype.hasOwnProperty.call(fsTextCache, cacheKey)) {
      setTimeout(function() { callback(null, fsTextCache[cacheKey]); }, 0);
      return;
    }

    var url = pathToUrl(normalized);
    if (!url) {
      setTimeout(function() {
        var invalid = new Error('ENOENT: invalid path ' + normalized);
        invalid.code = 'ENOENT';
        callback(invalid);
      }, 0);
      return;
    }

    var xhr = xhrGet(url, false);
    if (!xhr) {
      setTimeout(function() {
        var xerr = new Error('ENOENT: unable to open ' + normalized);
        xerr.code = 'ENOENT';
        callback(xerr);
      }, 0);
      return;
    }
    xhr.onload = function() {
      if (xhr.status < 400 || xhr.status === 0) {
        fsTextCache[cacheKey] = xhr.responseText || '';
        callback(null, fsTextCache[cacheKey]);
      } else {
        var err = new Error('ENOENT: no such file or directory, open ' + normalized);
        err.code = 'ENOENT';
        callback(err);
      }
    };
    xhr.onerror = function() {
      var err = new Error('ENOENT: no such file or directory, open ' + normalized);
      err.code = 'ENOENT';
      callback(err);
    };
    xhr.send();
  }

  function dirListSync(pathLike) {
    var normalized = normalizeSlashes(pathLike);
    var url = pathToUrl(normalized);
    if (!url) return [];
    if (url.slice(-1) !== '/') url += '/';
    var res = xhrGet(url, true);
    if (!res.ok) return [];
    return parseDirectoryListing(res.text);
  }

  function statSync(pathLike) {
    var normalized = normalizeSlashes(pathLike);
    var directoryCandidates = [normalized];
    if (normalized.slice(-1) !== '/') directoryCandidates.push(normalized + '/');

    var isDir = false;
    for (var i = 0; i < directoryCandidates.length; i++) {
      var list = dirListSync(directoryCandidates[i]);
      if (list.length > 0) {
        isDir = true;
        break;
      }
    }

    if (!isDir && !fsExistsSync(normalized)) {
      var err = new Error('ENOENT: no such file or directory, stat ' + normalized);
      err.code = 'ENOENT';
      throw err;
    }

    return {
      isDirectory: function() { return isDir; },
      isFile: function() { return !isDir; }
    };
  }

  function fsExistsSync(pathLike) {
    var normalized = ensureMappedPath(pathLike);
    var cacheKey = 'exists:' + normalizeSlashes(normalized);
    if (Object.prototype.hasOwnProperty.call(fsExistsCache, cacheKey)) {
      return fsExistsCache[cacheKey];
    }

    if (isSavePath(normalized)) {
      var hasSave = localStorage.getItem(storagePrefix + normalizeSlashes(normalized)) != null;
      fsExistsCache[cacheKey] = hasSave;
      return hasSave;
    }

    var url = pathToUrl(normalized);
    if (!url) {
      fsExistsCache[cacheKey] = false;
      return false;
    }

    var res = xhrGet(url, true);
    var ok = !!res.ok;
    fsExistsCache[cacheKey] = ok;
    return ok;
  }

  function writeText(pathLike, data) {
    var normalized = normalizeSlashes(pathLike);
    var value = data == null ? '' : String(data);
    localStorage.setItem(storagePrefix + normalized, value);
    fsExistsCache['exists:' + normalized] = true;
  }

  if (!window.Buffer) {
    function CompatBuffer(value) {
      this._text = value == null ? '' : String(value);
      this.length = this._text.length;
    }
    CompatBuffer.prototype.slice = function(start, end) {
      return new CompatBuffer(this._text.slice(start, end));
    };
    CompatBuffer.prototype.toString = function() {
      return this._text;
    };
    CompatBuffer.from = function(value) {
      if (value instanceof CompatBuffer) return value;
      if (value && typeof value.toString === 'function') {
        return new CompatBuffer(value.toString());
      }
      return new CompatBuffer(value);
    };
    CompatBuffer.concat = function(list) {
      var out = '';
      for (var i = 0; i < (list || []).length; i++) {
        out += CompatBuffer.from(list[i]).toString();
      }
      return new CompatBuffer(out);
    };
    window.Buffer = CompatBuffer;
  }

  var fsModule = {
    existsSync: fsExistsSync,
    readFileSync: function(pathLike, options) {
      var text = readTextSync(pathLike);
      var encoding = typeof options === 'string' ? options : (options && options.encoding);
      return encoding ? text : makeBuffer(text);
    },
    readFile: function(pathLike, options, callback) {
      var cb = callback;
      var opts = options;
      if (typeof opts === 'function') {
        cb = opts;
        opts = null;
      }
      cb = cb || function() {};
      readTextAsync(pathLike, function(err, text) {
        if (err) return cb(err);
        var encoding = typeof opts === 'string' ? opts : (opts && opts.encoding);
        cb(null, encoding ? text : makeBuffer(text));
      });
    },
    writeFileSync: function(pathLike, data) {
      writeText(pathLike, data);
    },
    writeFile: function(pathLike, data, callback) {
      writeText(pathLike, data);
      if (typeof callback === 'function') setTimeout(callback, 0);
    },
    mkdirSync: function() {},
    readdirSync: function(pathLike) {
      return dirListSync(pathLike);
    },
    statSync: function(pathLike) {
      return statSync(pathLike);
    },
    stat: function(pathLike, callback) {
      var cb = callback || function() {};
      setTimeout(function() {
        try {
          cb(null, statSync(pathLike));
        } catch (e) {
          cb(e);
        }
      }, 0);
    },
    unlinkSync: function(pathLike) {
      localStorage.removeItem(storagePrefix + normalizeSlashes(pathLike));
    },
    unlink: function(pathLike, callback) {
      localStorage.removeItem(storagePrefix + normalizeSlashes(pathLike));
      if (typeof callback === 'function') setTimeout(callback, 0);
    },
    rename: function(oldPath, newPath, callback) {
      var value = localStorage.getItem(storagePrefix + normalizeSlashes(oldPath));
      if (value != null) {
        localStorage.setItem(storagePrefix + normalizeSlashes(newPath), value);
        localStorage.removeItem(storagePrefix + normalizeSlashes(oldPath));
      }
      if (typeof callback === 'function') setTimeout(callback, 0);
    },
    open: function(pathLike, flags, mode, callback) {
      var cb = callback;
      if (typeof mode === 'function') cb = mode;
      if (typeof cb === 'function') setTimeout(function() { cb(null, 1); }, 0);
    },
    close: function(fd, callback) {
      if (typeof callback === 'function') setTimeout(callback, 0);
    }
  };

  var pathModule = {
    sep: '/',
    delimiter: ':',
    normalize: function(pathLike) {
      return normalizePathSegments(pathLike);
    },
    join: function() {
      return joinPath.apply(null, arguments);
    },
    resolve: function() {
      var parts = [];
      for (var i = 0; i < arguments.length; i++) {
        parts.push(arguments[i]);
      }
      return joinPath.apply(null, parts);
    },
    dirname: dirname,
    extname: extname,
    basename: basename
  };

  var isMac = /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent || '');
  var osModule = {
    platform: function() { return isMac ? 'darwin' : 'win32'; },
    type: function() { return isMac ? 'Darwin' : 'Windows_NT'; },
    release: function() { return '10.0'; },
    arch: function() { return 'x64'; }
  };

  var noop = function() {};
  var fakeWindow = {
    x: 0,
    y: 0,
    menu: null,
    on: noop,
    showDevTools: noop,
    moveBy: noop,
    moveTo: noop,
    resizeBy: noop,
    show: noop,
    focus: noop,
    close: noop
  };

  var nwGuiModule = {
    App: { argv: [] },
    Window: { get: function() { return fakeWindow; } },
    Screen: { Init: noop, on: noop },
    Menu: function() { this.createMacBuiltin = noop; },
    Shell: {
      openExternal: function(url) {
        if (url) window.open(url, '_blank');
      }
    }
  };

  var steamStub = {
    initAPI: function() { return false; },
    getAchievement: function(name, cb) { if (typeof cb === 'function') cb(false); },
    activateAchievement: noop,
    clearAchievement: noop,
    getSteamId: function() { return null; },
    getNumberOfPlayers: function(cb) { if (typeof cb === 'function') cb(0); },
    saveTextToFile: function(file, contents, ok) { if (typeof ok === 'function') ok(); },
    readTextFromFile: function(file, ok) { if (typeof ok === 'function') ok(''); },
    isGameOverlayEnabled: function() { return false; },
    activateGameOverlay: noop,
    activateGameOverlayToWebPage: noop
  };

  function safeLoadYaml(text) {
    var source = text == null ? '' : String(text);
    if (window.jsyaml && typeof window.jsyaml.safeLoad === 'function') {
      return window.jsyaml.safeLoad(source);
    }
    try {
      return JSON.parse(source);
    } catch (e) {
      return {};
    }
  }

  var commonJsCache = {};

  function tryModuleCandidate(pathLike) {
    var direct = ensureMappedPath(pathLike);
    if (/\.(js|json)$/i.test(direct)) {
      if (fsExistsSync(direct)) return direct;
      return null;
    }
    var candidates = [
      direct + '.js',
      direct + '.json',
      joinPath(direct, 'index.js'),
      joinPath(direct, 'index.json')
    ];
    for (var i = 0; i < candidates.length; i++) {
      if (fsExistsSync(candidates[i])) return candidates[i];
    }
    return null;
  }

  function resolveCommonJsPath(request, parentFile) {
    var req = normalizeSlashes(request);
    if (!req) return null;
    if (req.charAt(0) === '.' || req.charAt(0) === '/') {
      var base = req.charAt(0) === '.'
        ? dirname(parentFile || joinPath(baseDir, 'index.html'))
        : '';
      var candidate = req.charAt(0) === '.' ? joinPath(base, req) : req;
      return tryModuleCandidate(candidate);
    }
    if (req === './js/libs/js-yaml-master' || req === 'js-yaml') {
      return tryModuleCandidate(joinPath(baseDir, 'js/libs/js-yaml-master/index.js'));
    }
    return null;
  }

  function loadCommonJsModule(absPath) {
    var entry = tryModuleCandidate(absPath) || absPath;
    entry = normalizeSlashes(entry);
    if (commonJsCache[entry]) {
      return commonJsCache[entry].exports;
    }

    if (/\.json$/i.test(entry)) {
      var jsonText = readTextSync(entry);
      var jsonModule = { exports: JSON.parse(jsonText || '{}') };
      commonJsCache[entry] = jsonModule;
      return jsonModule.exports;
    }

    var source = readTextSync(entry);
    var module = { id: entry, exports: {} };
    commonJsCache[entry] = module;
    var filename = entry;
    var fileDir = dirname(filename);
    var localRequire = function(name) {
      if (Object.prototype.hasOwnProperty.call(moduleMap, name)) {
        return moduleMap[name];
      }
      if (name === './js/libs/js-yaml-master' || name === 'js-yaml') {
        return getJsYamlModule();
      }
      var resolved = resolveCommonJsPath(name, filename);
      if (resolved) {
        return loadCommonJsModule(resolved);
      }
      return compatRequire(name);
    };

    try {
      var wrapped = new Function(
        'module',
        'exports',
        'require',
        '__filename',
        '__dirname',
        source + '\n//# sourceURL=' + pathToUrl(filename)
      );
      wrapped(module, module.exports, localRequire, filename, fileDir);
      return module.exports;
    } catch (e) {
      delete commonJsCache[entry];
      throw e;
    }
  }

  function getJsYamlModule() {
    if (window.jsyaml && typeof window.jsyaml.safeLoad === 'function') {
      return window.jsyaml;
    }
    try {
      var yaml = loadCommonJsModule(joinPath(baseDir, 'js/libs/js-yaml-master/index.js'));
      if (yaml && typeof yaml.safeLoad === 'function') {
        window.jsyaml = yaml;
        return yaml;
      }
    } catch (e) {}

    try {
      var yamlDirect = loadCommonJsModule(joinPath(baseDir, 'js/libs/js-yaml-master/lib/js-yaml.js'));
      if (yamlDirect && typeof yamlDirect.safeLoad === 'function') {
        window.jsyaml = yamlDirect;
        return yamlDirect;
      }
    } catch (e2) {}

    return { safeLoad: safeLoadYaml };
  }

  var cryptoModule = {
    createDecipheriv: function() {
      return {
        update: function(data) { return data || window.Buffer.from(''); },
        final: function() { return window.Buffer.from(''); }
      };
    }
  };

  moduleMap = {
    fs: fsModule,
    path: pathModule,
    os: osModule,
    'nw.gui': nwGuiModule,
    crypto: cryptoModule,
    './js/libs/greenworks': steamStub,
    './js/libs/greenworks.js': steamStub,
    buffer: { Buffer: window.Buffer },
    _process: window.process || {},
    child_process: { exec: noop, execFile: noop, spawn: noop },
    ncp: { ncp: function(from, to, cb) { if (typeof cb === 'function') cb(); } }
  };

  function compatRequire(name) {
    if (Object.prototype.hasOwnProperty.call(moduleMap, name)) {
      return moduleMap[name];
    }
    if (typeof name === 'string') {
      if (name.indexOf('greenworks') >= 0) return steamStub;
      if (name.indexOf('js-yaml-master') >= 0 || name.indexOf('js-yaml') >= 0) {
        return getJsYamlModule();
      }
      var resolved = resolveCommonJsPath(name, joinPath(baseDir, 'index.html'));
      if (resolved) {
        return loadCommonJsModule(resolved);
      }
    }
    return {};
  }

  var originalRequire = (typeof window.require === 'function') ? window.require : null;
  window.require = function(name) {
    if (originalRequire) {
      try {
        return originalRequire(name);
      } catch (e) {
        return compatRequire(name);
      }
    }
    return compatRequire(name);
  };

  if (!window.nw) {
    window.nw = {
      App: nwGuiModule.App,
      Window: nwGuiModule.Window,
      Screen: nwGuiModule.Screen,
      Shell: nwGuiModule.Shell
    };
  } else {
    window.nw.App = window.nw.App || nwGuiModule.App;
    window.nw.Window = window.nw.Window || nwGuiModule.Window;
    window.nw.Screen = window.nw.Screen || nwGuiModule.Screen;
    window.nw.Shell = window.nw.Shell || nwGuiModule.Shell;
  }

  if (!window.process) {
    window.process = {};
  }
  window.process.platform = window.process.platform || osModule.platform();
  window.process.env = window.process.env || {};
  window.process.env.LOCALAPPDATA = window.process.env.LOCALAPPDATA || '/save/';
  window.process.env.HOME = window.process.env.HOME || '/save/';
  window.process.mainModule = window.process.mainModule || {};
  window.process.mainModule.filename = window.process.mainModule.filename || normalizePathSegments(baseDir + '/index.html');
  window.process.cwd = window.process.cwd || function() { return normalizePathSegments(baseDir); };
  window.process.versions = window.process.versions || {};

  if (window.Utils && typeof window.Utils.isNwjs === 'function') {
    window.Utils.isNwjs = function() { return false; };
  }
})();
