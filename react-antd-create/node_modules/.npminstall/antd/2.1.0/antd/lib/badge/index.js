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

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _ScrollNumber = require('./ScrollNumber');

var _ScrollNumber2 = _interopRequireDefault(_ScrollNumber);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Badge = function (_React$Component) {
    (0, _inherits3["default"])(Badge, _React$Component);

    function Badge() {
        (0, _classCallCheck3["default"])(this, Badge);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Badge.prototype.render = function render() {
        var _classNames, _classNames2;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['count', 'prefixCls', 'overflowCount', 'className', 'style', 'children', 'dot', 'status', 'text']);

        var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var count = _splitObject2$.count;
        var prefixCls = _splitObject2$.prefixCls;
        var overflowCount = _splitObject2$.overflowCount;
        var className = _splitObject2$.className;
        var style = _splitObject2$.style;
        var children = _splitObject2$.children;
        var dot = _splitObject2$.dot;
        var status = _splitObject2$.status;
        var text = _splitObject2$.text;
        var restProps = _splitObject2[1];

        var isDot = dot || status;
        count = count > overflowCount ? overflowCount + '+' : count;
        // dot mode don't need count
        if (isDot) {
            count = '';
        }
        // null undefined "" "0" 0
        var hidden = (!count || count === '0') && !isDot;
        var scrollNumberCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-dot', isDot), (0, _defineProperty3["default"])(_classNames, prefixCls + '-count', !isDot), _classNames));
        var badgeCls = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, className, !!className), (0, _defineProperty3["default"])(_classNames2, prefixCls, true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-status', !!status), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-not-a-wrapper', !children), _classNames2));
        // <Badge status="success" />
        if (!children && status) {
            var _classNames3;

            var statusCls = (0, _classnames2["default"])((_classNames3 = {}, (0, _defineProperty3["default"])(_classNames3, prefixCls + '-status-dot', !!status), (0, _defineProperty3["default"])(_classNames3, prefixCls + '-status-' + status, true), _classNames3));
            return _react2["default"].createElement(
                'span',
                { className: badgeCls },
                _react2["default"].createElement('span', { className: statusCls }),
                _react2["default"].createElement(
                    'span',
                    { className: prefixCls + '-status-text' },
                    text
                )
            );
        }
        return _react2["default"].createElement(
            'span',
            (0, _extends3["default"])({ className: badgeCls, title: count, style: null }, restProps),
            children,
            _react2["default"].createElement(
                _rcAnimate2["default"],
                { component: '', showProp: 'data-show', transitionName: prefixCls + '-zoom', transitionAppear: true },
                hidden ? null : _react2["default"].createElement(_ScrollNumber2["default"], { 'data-show': !hidden, className: scrollNumberCls, count: count, style: style })
            ),
            hidden || !text ? null : _react2["default"].createElement(
                'span',
                { className: prefixCls + '-status-text' },
                text
            )
        );
    };

    return Badge;
}(_react2["default"].Component);

exports["default"] = Badge;

Badge.defaultProps = {
    prefixCls: 'ant-badge',
    count: null,
    dot: false,
    overflowCount: 99
};
Badge.propTypes = {
    count: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number]),
    dot: _react2["default"].PropTypes.bool,
    overflowCount: _react2["default"].PropTypes.number
};
module.exports = exports['default'];