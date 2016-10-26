'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _rcRadio = require('rc-radio');

var _rcRadio2 = _interopRequireDefault(_rcRadio);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Radio = function (_React$Component) {
    (0, _inherits3["default"])(Radio, _React$Component);

    function Radio() {
        (0, _classCallCheck3["default"])(this, Radio);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Radio.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _reactAddonsPureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
    };

    Radio.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props = this.props;
        var prefixCls = _props.prefixCls;
        var children = _props.children;
        var checked = _props.checked;
        var disabled = _props.disabled;
        var className = _props.className;
        var style = _props.style;

        var wrapperClassString = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-wrapper', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-wrapper-checked', checked), (0, _defineProperty3["default"])(_classNames, prefixCls + '-wrapper-disabled', disabled), (0, _defineProperty3["default"])(_classNames, className, !!className), _classNames));
        var classString = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, '' + prefixCls, true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-checked', checked), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-disabled', disabled), _classNames2));
        return _react2["default"].createElement(
            'label',
            { className: wrapperClassString, style: style },
            _react2["default"].createElement(_rcRadio2["default"], (0, _extends3["default"])({}, this.props, { className: classString, style: null, children: null })),
            children ? _react2["default"].createElement(
                'span',
                null,
                children
            ) : null
        );
    };

    return Radio;
}(_react2["default"].Component);

exports["default"] = Radio;

Radio.defaultProps = {
    prefixCls: 'ant-radio'
};
module.exports = exports['default'];