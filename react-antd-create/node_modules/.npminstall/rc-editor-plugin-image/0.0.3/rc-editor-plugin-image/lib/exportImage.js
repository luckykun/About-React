"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = exportImage;
function exportImage(content, editorData) {
    if (editorData.image) {
        return "<img src=" + editorData.image.src + " width=\"" + editorData.width + "\" height=\"" + editorData.height + "\"/>";
    } else {
        return "<img src=" + editorData.url + " />";
    }
}
module.exports = exports['default'];