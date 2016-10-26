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

var _TimelineItem = require('./TimelineItem');

var _TimelineItem2 = _interopRequireDefault(_TimelineItem);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Timeline = function (_React$Component) {
    (0, _inherits3["default"])(Timeline, _React$Component);

    function Timeline() {
        (0, _classCallCheck3["default"])(this, Timeline);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Timeline.prototype.render = function render() {
        var _classNames;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['prefixCls', 'children', 'pending', 'className']);

        var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var prefixCls = _splitObject2$.prefixCls;
        var children = _splitObject2$.children;
        var pending = _splitObject2$.pending;
        var className = _splitObject2$.className;
        var restProps = _splitObject2[1];

        var pendingNode = typeof pending === 'boolean' ? null : pending;
        var classString = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-pending', !!pending), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
        return _react2["default"].createElement(
            'ul',
            (0, _extends3["default"])({}, restProps, { className: classString }),
            _react2["default"].Children.map(children, function (ele, idx) {
                return _react2["default"].cloneElement(ele, {
                    last: idx === children.length - 1
                });
            }),
            !!pending ? _react2["default"].createElement(
                _TimelineItem2["default"],
                { pending: !!pending },
                pendingNode
            ) : null
        );
    };

    return Timeline;
}(_react2["default"].Component);

exports["default"] = Timeline;

Timeline.defaultProps = {
    prefixCls: 'ant-timeline'
};
module.exports = exports['default'];