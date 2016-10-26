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

var _rcCheckbox = require('rc-checkbox');

var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Group = require('./Group');

var _Group2 = _interopRequireDefault(_Group);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Checkbox = function (_React$Component) {
    (0, _inherits3["default"])(Checkbox, _React$Component);

    function Checkbox() {
        (0, _classCallCheck3["default"])(this, Checkbox);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Checkbox.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _reactAddonsPureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
    };

    Checkbox.prototype.render = function render() {
        var _classNames;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['prefixCls', 'style', 'children', 'className', 'indeterminate']);

        var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var prefixCls = _splitObject2$.prefixCls;
        var style = _splitObject2$.style;
        var children = _splitObject2$.children;
        var className = _splitObject2$.className;
        var indeterminate = _splitObject2$.indeterminate;
        var restProps = _splitObject2[1];

        var classString = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, className, !!className), (0, _defineProperty3["default"])(_classNames, prefixCls + '-wrapper', true), _classNames));
        var checkboxClass = (0, _classnames2["default"])((0, _defineProperty3["default"])({}, prefixCls + '-indeterminate', indeterminate));
        return _react2["default"].createElement(
            'label',
            { className: classString, style: style },
            _react2["default"].createElement(_rcCheckbox2["default"], (0, _extends3["default"])({}, restProps, { prefixCls: prefixCls, className: checkboxClass, children: null })),
            children !== undefined ? _react2["default"].createElement(
                'span',
                null,
                children
            ) : null
        );
    };

    return Checkbox;
}(_react2["default"].Component);

exports["default"] = Checkbox;

Checkbox.Group = _Group2["default"];
Checkbox.defaultProps = {
    prefixCls: 'ant-checkbox',
    indeterminate: false
};
module.exports = exports['default'];