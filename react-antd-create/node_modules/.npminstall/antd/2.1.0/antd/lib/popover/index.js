'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Popover = function (_React$Component) {
    (0, _inherits3["default"])(Popover, _React$Component);

    function Popover() {
        (0, _classCallCheck3["default"])(this, Popover);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Popover.prototype.render = function render() {
        return _react2["default"].createElement(_tooltip2["default"], (0, _extends3["default"])({ ref: 'tooltip' }, this.props, { overlay: this.getOverlay() }));
    };

    Popover.prototype.getPopupDomNode = function getPopupDomNode() {
        return this.refs.tooltip.getPopupDomNode();
    };

    Popover.prototype.getOverlay = function getOverlay() {
        var _props = this.props;
        var title = _props.title;
        var prefixCls = _props.prefixCls;
        var content = _props.content;

        return _react2["default"].createElement(
            'div',
            null,
            title && _react2["default"].createElement(
                'div',
                { className: prefixCls + '-title' },
                title
            ),
            _react2["default"].createElement(
                'div',
                { className: prefixCls + '-inner-content' },
                content
            )
        );
    };

    return Popover;
}(_react2["default"].Component);

exports["default"] = Popover;

Popover.defaultProps = {
    prefixCls: 'ant-popover',
    placement: 'top',
    transitionName: 'zoom-big',
    trigger: 'hover',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    overlayStyle: {}
};
module.exports = exports['default'];