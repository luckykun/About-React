'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RadioButton = function (_React$Component) {
    (0, _inherits3["default"])(RadioButton, _React$Component);

    function RadioButton() {
        (0, _classCallCheck3["default"])(this, RadioButton);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    RadioButton.prototype.render = function render() {
        return _react2["default"].createElement(_radio2["default"], this.props);
    };

    return RadioButton;
}(_react2["default"].Component);

exports["default"] = RadioButton;

RadioButton.defaultProps = {
    prefixCls: 'ant-radio-button'
};
module.exports = exports['default'];