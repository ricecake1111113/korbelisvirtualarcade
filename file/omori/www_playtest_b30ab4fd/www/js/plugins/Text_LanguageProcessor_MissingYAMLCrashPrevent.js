

(function($) {
    var Alias_getTextData = $.getTextData;
    var Alias_getSystemText = $.getSystemText;
    var Alias_getPluginText = $.getPluginText;
    var Alias_getInputName = $.getInputName;
    var Alias_getInputKeysTable = $.getInputKeysTable;
    var Alias_loadAllLanguageFiles = $.loadAllLanguageFiles;

    function fallbackText(file, name, language) {
        return {
            faceset: "",
            faceindex: 0,
            background: 0,
            position: 2,
            text: "Missing text: " + file + "." + name + " (" + language + ")"
        };
    }

    function ensureLanguageStore(ctx, language) {
        ctx._data = ctx._data || {};
        ctx._data[language] = ctx._data[language] || { text: {} };
        ctx._data[language].text = ctx._data[language].text || {};
    }

    function tryLoadYamlFile(ctx, language, file) {
        ensureLanguageStore(ctx, language);
        if (ctx._data[language].text[file] !== undefined) return;

        var fs = require('fs');
        var path = require('path');
        var yaml = require('./js/libs/js-yaml-master');
        var base = path.dirname(process.mainModule.filename);
        var candidates = [
            base + '/Languages/' + language + '/' + file + '.yaml',
            base + '/languages/' + language + '/' + file + '.yaml',
            base + '/Languages/' + language + '/' + file + '.yml',
            base + '/languages/' + language + '/' + file + '.yml'
        ];

        for (var i = 0; i < candidates.length; i++) {
            var target = candidates[i];
            try {
                if (!fs.existsSync(target)) continue;
                var raw = fs.readFileSync(target, 'utf8');
                var parsed = yaml.safeLoad(raw);
                ctx._data[language].text[file] = parsed || {};
                return;
            } catch (e) {}
        }

        ctx._data[language].text[file] = ctx._data[language].text[file] || {};
    }

    // GitHub Pages does not support directory listing. Keep language loading lazy.
    $.loadAllLanguageFiles = function() {
        this._data = this._data || {};
        var lang = this._language || (this.defaultLanguage ? this.defaultLanguage() : 'en');
        ensureLanguageStore(this, lang);
        tryLoadYamlFile(this, lang, 'System');
        tryLoadYamlFile(this, lang, 'Database');
    };

    $.getTextData = function(file, name, language) {
        if (language === undefined) { language = this._language; }
        ensureLanguageStore(this, language);
        tryLoadYamlFile(this, language, file);

        var fileData = this._data[language].text[file];
        if (!fileData || fileData[name] === undefined || fileData[name] === null) {
            return fallbackText(file, name, language);
        }
        return Alias_getTextData.call(this, file, name, language);
    };

    $.getSystemText = function(type, name, language) {
        if (language === undefined) { language = this._language; }
        ensureLanguageStore(this, language);
        tryLoadYamlFile(this, language, 'System');
        var systemData = this._data[language].text.System;
        if (!systemData || !systemData.terms || !systemData.terms[type] || systemData.terms[type][name] === undefined) {
            return "";
        }
        return Alias_getSystemText.call(this, type, name, language);
    };

    $.getPluginText = function(type, name, language) {
        if (language === undefined) { language = this._language; }
        ensureLanguageStore(this, language);
        tryLoadYamlFile(this, language, 'System');
        var systemData = this._data[language].text.System;
        if (!systemData || !systemData.plugins || !systemData.plugins[type] || systemData.plugins[type][name] === undefined) {
            return "";
        }
        return Alias_getPluginText.call(this, type, name, language);
    };

    $.getInputName = function(type, input, language) {
        if (language === undefined) { language = this._language; }
        ensureLanguageStore(this, language);
        tryLoadYamlFile(this, language, 'System');
        var systemData = this._data[language].text.System;
        if (!systemData || !systemData.InputNames || !systemData.InputNames[type] || systemData.InputNames[type][input] === undefined) {
            return "";
        }
        return Alias_getInputName.call(this, type, input, language);
    };

    $.getInputKeysTable = function() {
        var language = this._language;
        ensureLanguageStore(this, language);
        tryLoadYamlFile(this, language, 'System');
        var systemData = this._data[language].text.System;
        if (!systemData || !systemData.inputKeysTable) {
            return [];
        }
        return Alias_getInputKeysTable.call(this);
    };
})(LanguageManager);


