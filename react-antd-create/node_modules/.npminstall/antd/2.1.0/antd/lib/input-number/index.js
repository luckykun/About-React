'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rcInputNumber = require('rc-input-number');

var _rcInputNumber2 = _interopRequireDefault(_rcInputNumber);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InputNumber = function (_React$Component) {
    (0, _inherits3["default"])(InputNumber, _React$Component);

    function InputNumber() {
        (0, _classCallCheck3["default"])(this, InputNumber);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    InputNumber.prototype.render = function render() {
        var _classNames;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['size', 'className']);

        var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var className = _splitObject2$.className;
        var size = _splitObject2$.size;
        var others = _splitObject2[1];

        var inputNumberClass = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, this.props.prefixCls + '-lg', size === 'large'), (0, _defineProperty3["default"])(_classNames, this.props.prefixCls + '-sm', size === 'small'), (0, _defineProperty3["default"])(_classNames, className, !!className), _classNames));
        return _react2["default"].createElement(_rcInputNumber2["default"], (0, _extends3["default"])({ className: inputNumberClass }, others));
    };

    return InputNumber;
}(_react2["default"].Component);

exports["default"] = InputNumber;

InputNumber.defaultProps = {
    prefixCls: 'ant-input-number',
    step: 1
};
module.exports = exports['default'];