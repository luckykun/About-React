'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getRequestAnimationFrame;
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return function () {};
    }
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame;
    }
    var prefix = ['moz', 'ms', 'webkit'].filter(function (key) {
        return key + 'RequestAnimationFrame' in window;
    })[0];
    return prefix ? window[prefix + 'RequestAnimationFrame'] : function (callback) {
        return setTimeout(callback, 1000 / 60);
    };
}
module.exports = exports['default'];