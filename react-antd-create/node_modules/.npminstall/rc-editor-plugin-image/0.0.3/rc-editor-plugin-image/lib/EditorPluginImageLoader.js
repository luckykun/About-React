'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _draftJs = require('draft-js');

var _DraftOffsetKey = require('draft-js/lib/DraftOffsetKey');

var _DraftOffsetKey2 = _interopRequireDefault(_DraftOffsetKey);

var _getRangesForDraftEntity = require('draft-js/lib/getRangesForDraftEntity');

var _getRangesForDraftEntity2 = _interopRequireDefault(_getRangesForDraftEntity);

var _exportImage = require('./exportImage');

var _exportImage2 = _interopRequireDefault(_exportImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function getEntitySelectionState(contentBlock, entityKey) {
    var blockKey = contentBlock.getKey();
    var entitySelection = void 0;
    (0, _getRangesForDraftEntity2["default"])(contentBlock, entityKey).forEach(function (range) {
        entitySelection = new _draftJs.SelectionState({
            anchorOffset: range.start,
            anchorKey: blockKey,
            focusOffset: range.end,
            focusKey: blockKey,
            isBackward: false
        });
    });
    return entitySelection;
}

var EditorPluginImageLoader = function (_React$Component) {
    _inherits(EditorPluginImageLoader, _React$Component);

    function EditorPluginImageLoader() {
        _classCallCheck(this, EditorPluginImageLoader);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    EditorPluginImageLoader.prototype.componentWillMount = function componentWillMount() {
        var _this2 = this;

        var entityKey = this.props.entityKey;

        var entity = _draftJs.Entity.get(entityKey);
        var url = entity.getData().url;
        var image = new Image();
        image.onload = function () {
            var width = image.width;
            var height = image.height;

            _this2.replaceToImage(image);
        };
        image.src = url;
    };

    EditorPluginImageLoader.prototype.replaceToImage = function replaceToImage(image) {
        var _props = this.props;
        var callbacks = _props.callbacks;
        var entityKey = _props.entityKey;
        var offsetKey = _props.offsetKey;
        var decoratedText = _props.decoratedText;

        var editorState = callbacks.getEditorState();
        var offset = _DraftOffsetKey2["default"].decode(offsetKey);
        var contentBlock = editorState.getCurrentContent().getBlockForKey(offset.blockKey);
        var selection = getEntitySelectionState(contentBlock, entityKey);
        var imageEntity = _draftJs.Entity.create('image', 'IMMUTABLE', {
            image: image,
            width: image.width,
            height: image.height,
            "export": _exportImage2["default"]
        });
        var replacedContent = _draftJs.Modifier.replaceText(editorState.getCurrentContent(), selection, decoratedText, null, imageEntity);
        callbacks.setEditorState(_draftJs.EditorState.push(editorState, replacedContent, 'replace-image'));
    };

    EditorPluginImageLoader.prototype.render = function render() {
        return React.createElement(
            'div',
            null,
            ' loading.... '
        );
    };

    return EditorPluginImageLoader;
}(React.Component);

exports["default"] = EditorPluginImageLoader;
module.exports = exports['default'];