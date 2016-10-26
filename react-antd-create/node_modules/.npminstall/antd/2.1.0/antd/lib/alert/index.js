'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Alert = function (_React$Component) {
    (0, _inherits3["default"])(Alert, _React$Component);

    function Alert(props) {
        (0, _classCallCheck3["default"])(this, Alert);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.handleClose = function (e) {
            e.preventDefault();
            var dom = _reactDom2["default"].findDOMNode(_this);
            dom.style.height = dom.offsetHeight + 'px';
            // Magic code
            // 重复一次后才能正确设置 height
            dom.style.height = dom.offsetHeight + 'px';
            _this.setState({
                closing: false
            });
            _this.props.onClose(e);
        };
        _this.animationEnd = function () {
            _this.setState({
                closed: true,
                closing: true
            });
        };
        _this.state = {
            closing: true,
            closed: false
        };
        return _this;
    }

    Alert.prototype.render = function render() {
        var _classNames;

        var _props = this.props;
        var closable = _props.closable;
        var description = _props.description;
        var type = _props.type;
        var prefixCls = _props.prefixCls;
        var message = _props.message;
        var closeText = _props.closeText;
        var showIcon = _props.showIcon;
        var banner = _props.banner;
        // banner模式默认有 Icon

        showIcon = showIcon || banner;
        // banner模式默认为警告
        type = banner ? 'warning' : type;
        var iconType = '';
        switch (type) {
            case 'success':
                iconType = 'check-circle';
                break;
            case 'info':
                iconType = 'info-circle';
                break;
            case 'error':
                iconType = 'cross-circle';
                break;
            case 'warning':
                iconType = 'exclamation-circle';
                break;
            default:
                iconType = 'default';
        }
        // use outline icon in alert with description
        if (!!description) {
            iconType += '-o';
        }
        var alertCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + type, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-close', !this.state.closing), (0, _defineProperty3["default"])(_classNames, prefixCls + '-with-description', !!description), (0, _defineProperty3["default"])(_classNames, prefixCls + '-no-icon', !showIcon), (0, _defineProperty3["default"])(_classNames, prefixCls + '-banner', !!banner), _classNames));
        // closeable when closeText is assigned
        if (closeText) {
            closable = true;
        }
        return this.state.closed ? null : _react2["default"].createElement(
            _rcAnimate2["default"],
            { component: '', showProp: 'data-show', transitionName: prefixCls + '-slide-up', onEnd: this.animationEnd },
            _react2["default"].createElement(
                'div',
                { 'data-show': this.state.closing, className: alertCls },
                showIcon ? _react2["default"].createElement(_icon2["default"], { className: prefixCls + '-icon', type: iconType }) : null,
                _react2["default"].createElement(
                    'span',
                    { className: prefixCls + '-message' },
                    message
                ),
                _react2["default"].createElement(
                    'span',
                    { className: prefixCls + '-description' },
                    description
                ),
                closable ? _react2["default"].createElement(
                    'a',
                    { onClick: this.handleClose, className: prefixCls + '-close-icon' },
                    closeText || _react2["default"].createElement(_icon2["default"], { type: 'cross' })
                ) : null
            )
        );
    };

    return Alert;
}(_react2["default"].Component);

exports["default"] = Alert;

Alert.defaultProps = {
    prefixCls: 'ant-alert',
    showIcon: false,
    onClose: function onClose() {},

    type: 'info'
};
module.exports = exports['default'];