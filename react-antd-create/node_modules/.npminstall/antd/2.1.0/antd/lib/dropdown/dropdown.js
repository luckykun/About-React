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

var _rcDropdown = require('rc-dropdown');

var _rcDropdown2 = _interopRequireDefault(_rcDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Dropdown = function (_React$Component) {
    (0, _inherits3["default"])(Dropdown, _React$Component);

    function Dropdown() {
        (0, _classCallCheck3["default"])(this, Dropdown);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Dropdown.prototype.render = function render() {
        return _react2["default"].createElement(_rcDropdown2["default"], this.props);
    };

    return Dropdown;
}(_react2["default"].Component);

exports["default"] = Dropdown;

Dropdown.defaultProps = {
    transitionName: 'slide-up',
    prefixCls: 'ant-dropdown',
    mouseEnterDelay: 0.15,
    mouseLeaveDelay: 0.1
};
module.exports = exports['default'];