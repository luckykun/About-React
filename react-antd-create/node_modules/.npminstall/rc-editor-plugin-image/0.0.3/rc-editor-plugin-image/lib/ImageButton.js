'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ImageButton = function (_React$Component) {
    _inherits(ImageButton, _React$Component);

    function ImageButton() {
        _classCallCheck(this, ImageButton);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

        _this.state = {
            visible: false
        };
        return _this;
    }

    ImageButton.prototype.toggleVisible = function toggleVisible() {
        this.setState({
            visible: !this.state.visible
        });
    };

    ImageButton.prototype.render = function render() {
        var _classnames,
            _this2 = this;

        var visible = this.state.visible;

        var cls = (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, 'editor-icon', true), _defineProperty(_classnames, 'editor-icon-picture', true), _classnames));
        return _react2["default"].createElement('span', { onMouseDown: function onMouseDown() {
                return _this2.props.insertPicture('https://t.alipayobjects.com/images/T11rdgXbFkXXXXXXXX.png');
            }, className: cls });
    };

    return ImageButton;
}(_react2["default"].Component);

exports["default"] = ImageButton;
module.exports = exports['default'];