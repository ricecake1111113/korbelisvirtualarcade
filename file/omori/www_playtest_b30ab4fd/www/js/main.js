//=============================================================================
// main.js
//=============================================================================

PluginManager.setup($plugins);

function applyResponsiveFrameScaling() {
    if (!window.Graphics) {
        return;
    }

    Graphics._stretchEnabled = true;
    Graphics._updateRealScale = function() {
        var viewportWidth = window.innerWidth || document.documentElement.clientWidth || this._width;
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight || this._height;
        var horizontalScale = viewportWidth / this._width;
        var verticalScale = viewportHeight / this._height;

        if (!isFinite(horizontalScale) || horizontalScale <= 0) horizontalScale = 1;
        if (!isFinite(verticalScale) || verticalScale <= 0) verticalScale = 1;

        this._realScale = Math.min(horizontalScale, verticalScale);
    };
}

applyResponsiveFrameScaling();

window.onload = function() {
    applyResponsiveFrameScaling();
    SceneManager.run(Scene_Boot);
};

