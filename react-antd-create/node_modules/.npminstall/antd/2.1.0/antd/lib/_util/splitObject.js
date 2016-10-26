"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = splitObject;
function splitObject(obj, parts) {
    var left = {};
    var right = {};
    Object.keys(obj).forEach(function (k) {
        if (parts.indexOf(k) !== -1) {
            left[k] = obj[k];
        } else {
            right[k] = obj[k];
        }
    });
    return [left, right];
}
module.exports = exports['default'];