'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('react-resizable/css/styles.css');

var _draftJs = require('draft-js');

var _EditorPluginImage = require('./EditorPluginImage');

var _EditorPluginImage2 = _interopRequireDefault(_EditorPluginImage);

var _EditorPluginImageLoader = require('./EditorPluginImageLoader');

var _EditorPluginImageLoader2 = _interopRequireDefault(_EditorPluginImageLoader);

var _ImageButton = require('./ImageButton');

var _ImageButton2 = _interopRequireDefault(_ImageButton);

var _exportImage = require('./exportImage');

var _exportImage2 = _interopRequireDefault(_exportImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function findWithRegex(regex, contentBlock, callback) {
    // Get the text from the contentBlock
    var text = contentBlock.getText();
    var matchArr = void 0;
    var start = void 0; // eslint-disable-line
    // Go through all matches in the text and return the indizes to the callback
    while ((matchArr = regex.exec(text)) !== null) {
        start = matchArr.index;
        callback(start, start + matchArr[0].length);
    }
}
function noop() {}
;
exports["default"] = {
    constructor: function constructor() {
        var callbacks = {
            getEditorState: noop,
            setEditorState: noop
        };
        function insertPicture(url) {
            var entityKey = _draftJs.Entity.create('image-loader', 'IMMUTABLE', { url: url, "export": _exportImage2["default"] });
            var editorState = callbacks.getEditorState();
            var selection = editorState.getSelection();
            var insertPictureContent = _draftJs.Modifier.replaceText(editorState.getCurrentContent(), selection, url, null, entityKey);
            var InsertSpaceContent = _draftJs.Modifier.insertText(insertPictureContent, insertPictureContent.getSelectionAfter(), ' ');
            var newEditorState = _draftJs.EditorState.push(editorState, InsertSpaceContent, 'insert-mention');
            callbacks.setEditorState(_draftJs.EditorState.forceSelection(newEditorState, InsertSpaceContent.getSelectionAfter()));
        }
        var uploadPopup = _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement('input', { type: 'text' })
        );
        return {
            name: 'image',
            callbacks: callbacks,
            decorators: [{
                strategy: function strategy(contentBlock, callback) {
                    contentBlock.findEntityRanges(function (character) {
                        var entityKey = character.getEntity();
                        return entityKey && _draftJs.Entity.get(entityKey).getType() === 'image';
                    }, callback);
                },

                component: function component(props) {
                    return _react2["default"].createElement(_EditorPluginImage2["default"], props);
                }
            }, {
                strategy: function strategy(contentBlock, callback) {
                    contentBlock.findEntityRanges(function (character) {
                        var entityKey = character.getEntity();
                        return entityKey && _draftJs.Entity.get(entityKey).getType() === 'image-loader';
                    }, callback);
                },

                component: function component(props) {
                    return _react2["default"].createElement(_EditorPluginImageLoader2["default"], _extends({}, props, { callbacks: callbacks }));
                }
            }],
            component: function component(props) {
                return _react2["default"].createElement(_ImageButton2["default"], { insertPicture: insertPicture });
            }
        };
    },

    config: {}
};
module.exports = exports['default'];