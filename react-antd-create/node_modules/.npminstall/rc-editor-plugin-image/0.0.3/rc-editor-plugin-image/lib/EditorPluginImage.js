'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _draftJs = require('draft-js');

var _reactResizable = require('react-resizable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var EditorPluginImage = function (_React$Component) {
    _inherits(EditorPluginImage, _React$Component);

    function EditorPluginImage() {
        _classCallCheck(this, EditorPluginImage);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

        _this.onResize = function (event, _ref) {
            var element = _ref.element;
            var size = _ref.size;

            _this.setState({ width: size.width, height: size.height });
            var entityKey = _this.props.entityKey;

            _draftJs.Entity.mergeData(entityKey, { width: size.width, height: size.height });
        };
        _this.onMouseDown = function () {
            _this.setState({
                focus: true
            });
        };
        return _this;
    }

    EditorPluginImage.prototype.render = function render() {
        var _classnames;

        var entityKey = this.props.entityKey;

        var entityData = _draftJs.Entity.get(entityKey).getData();
        var width = entityData.width;
        var height = entityData.height;
        var image = entityData.image;

        var imageStyle = {
            width: width,
            height: height,
            backgroundImage: 'url(' + image.src + ')',
            backgroundSize: '100% 100%',
            lineHeight: height + 'px',
            letterSpacing: width,
            verticalAlign: 'bottom',
            display: 'inline-block'
        };
        var cls = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, 'resizable-image', true), _defineProperty(_classnames, 'focus', focus), _classnames));
        return React.createElement(
            _reactResizable.Resizable,
            { width: width, height: height, onResize: this.onResize },
            React.createElement('span', { className: cls, contentEditable: false, onMouseDown: this.onMouseDown, style: imageStyle })
        );
    };

    return EditorPluginImage;
}(React.Component);

exports["default"] = EditorPluginImage;
module.exports = exports['default'];