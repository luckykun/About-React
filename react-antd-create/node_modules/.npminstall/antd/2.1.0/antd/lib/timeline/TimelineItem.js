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

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TimelineItem = function (_React$Component) {
    (0, _inherits3["default"])(TimelineItem, _React$Component);

    function TimelineItem() {
        (0, _classCallCheck3["default"])(this, TimelineItem);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    TimelineItem.prototype.render = function render() {
        var _classNames, _classNames2;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['prefixCls', 'color', 'last', 'children', 'pending', 'className', 'dot']);

        var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var prefixCls = _splitObject2$.prefixCls;
        var color = _splitObject2$.color;
        var last = _splitObject2$.last;
        var children = _splitObject2$.children;
        var pending = _splitObject2$.pending;
        var className = _splitObject2$.className;
        var dot = _splitObject2$.dot;
        var restProps = _splitObject2[1];

        var itemClassName = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-item', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-item-last', last), (0, _defineProperty3["default"])(_classNames, prefixCls + '-item-pending', pending), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
        var dotClassName = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-item-head', true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-item-head-custom', dot), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-item-head-' + color, true), _classNames2));
        return _react2["default"].createElement(
            'li',
            (0, _extends3["default"])({}, restProps, { className: itemClassName }),
            _react2["default"].createElement('div', { className: prefixCls + '-item-tail' }),
            _react2["default"].createElement(
                'div',
                { className: dotClassName, style: { borderColor: /blue|red|green/.test(color) ? null : color } },
                dot
            ),
            _react2["default"].createElement(
                'div',
                { className: prefixCls + '-item-content' },
                children
            )
        );
    };

    return TimelineItem;
}(_react2["default"].Component);

exports["default"] = TimelineItem;

TimelineItem.defaultProps = {
    prefixCls: 'ant-timeline',
    color: 'blue',
    last: false,
    pending: false
};
module.exports = exports['default'];