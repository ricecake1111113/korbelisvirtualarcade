// Add this interceptor at the VERY TOP of ui.js (before any other functions)
(function() {
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        // Fix localhost and deployed paths
        if (url.includes('/no-cache') || url.endsWith('no-cache')) {
            url = url.replace(/no-cache/, 'supertest/boasmaybe/no-cache');
        }
        return originalOpen.apply(this, [method, url, ...Array.from(arguments).slice(2)]);
    };
})();

// Then modify your existing onGameLoaded to ensure initialization
function onGameLoaded() {
    // Your existing game loaded logic
    console.log("Game loaded"); // Keep any existing code
}

function initInterceptor() {
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;
    const self = this;

    XMLHttpRequest.prototype.open = function(...args) {
        // Fix URL path for no-cache requests
        if (args[1] && args[1].includes('no-cache')) {
            args[1] = args[1].replace('no-cache', 'supertest/boasmaybe/no-cache');
        }
        
        this.__METHOD__ = args[0];
        this.__URL__ = args[1];
        
        this.addEventListener("load", ({ target }) => {
            // Add your response interception logic here if needed
        });
        
        return originalOpen.apply(this, args);
    };

    XMLHttpRequest.prototype.send = function(...args) {
        // Add your request interception logic here if needed
        return originalSend.apply(this, args);
    };
}

// Initialize the interceptor when the game loads
function onGameLoaded() {
    initInterceptor(); // Add this line
    // Your existing game loaded logic
}

var AD_STATUS = {
  NONE: 0,
  CLOSE_FINISHED: 1,
  CLOSE_ABORTED: 2,
  ERROR: 3,
}

function onShowUI() {
  
}

function onHideUI() {
  
}

function onGameLoaded() {
  
}

function hideProgress() {
 
}

function playButtonClicked(from) {
  sendClickEvent('game', 'play')
  startGameFromScreen = from
  StartGame(startGameFromScreen)
}

function sendClickEvent(category, label) {
  window.ga && window.ga('send', 'event', category, 'Clicked', label)
}

function StartGame(target) {
	gameInstance.SendMessage('GameManager', 'StartGame', parseInt(target, 10))
}

function getFetchResult() {
	return true
}

function showVideoAd(from) {
	rewardedAdFrom = from
	gameInstance.SendMessage('WebGLAdManager', 'FireWebAdEvent', 1 + '/' + (rewardedAdFrom))
}