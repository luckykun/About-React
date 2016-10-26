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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _addEventListener = require('rc-util/lib/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _getScroll = require('../_util/getScroll');

var _getScroll2 = _interopRequireDefault(_getScroll);

var _getRequestAnimationFrame = require('../_util/getRequestAnimationFrame');

var _getRequestAnimationFrame2 = _interopRequireDefault(_getRequestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reqAnimFrame = (0, _getRequestAnimationFrame2["default"])();
var currentScrollTop = function currentScrollTop() {
    return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
};
var easeInOutCubic = function easeInOutCubic(t, b, c, d) {
    var cc = c - b;
    t /= d / 2;
    if (t < 1) {
        return cc / 2 * t * t * t + b;
    } else {
        return cc / 2 * ((t -= 2) * t * t + 2) + b;
    }
};

var BackTop = function (_React$Component) {
    (0, _inherits3["default"])(BackTop, _React$Component);

    function BackTop(props) {
        (0, _classCallCheck3["default"])(this, BackTop);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.scrollToTop = function (e) {
            var scrollTop = currentScrollTop();
            var startTime = Date.now();
            var frameFunc = function frameFunc() {
                var timestamp = Date.now();
                var time = timestamp - startTime;
                _this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
                if (time < 450) {
                    reqAnimFrame(frameFunc);
                }
            };
            reqAnimFrame(frameFunc);
            _this.props.onClick(e);
        };
        _this.handleScroll = function () {
            var _this$props = _this.props;
            var visibilityHeight = _this$props.visibilityHeight;
            var target = _this$props.target;

            var scrollTop = (0, _getScroll2["default"])(target(), true);
            _this.setState({
                visible: scrollTop > visibilityHeight
            });
        };
        _this.state = {
            visible: false
        };
        return _this;
    }

    BackTop.prototype.setScrollTop = function setScrollTop(value) {
        var targetNode = this.props.target();
        if (targetNode === window) {
            document.body.scrollTop = value;
            document.documentElement.scrollTop = value;
        } else {
            targetNode.scrollTop = value;
        }
    };

    BackTop.prototype.componentDidMount = function componentDidMount() {
        this.handleScroll();
        this.scrollEvent = (0, _addEventListener2["default"])(this.props.target(), 'scroll', this.handleScroll);
    };

    BackTop.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.scrollEvent) {
            this.scrollEvent.remove();
        }
    };

    BackTop.prototype.render = function render() {
        var _classNames;

        var _props = this.props;
        var prefixCls = _props.prefixCls;
        var className = _props.className;
        var children = _props.children;

        var classString = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, className, !!className), _classNames));
        var defaultElement = _react2["default"].createElement(
            'div',
            { className: prefixCls + '-content' },
            _react2["default"].createElement(_icon2["default"], { className: prefixCls + '-icon', type: 'to-top' })
        );
        // fix https://fb.me/react-unknown-prop
        var divProps = (0, _omit2["default"])(this.props, ['prefixCls', 'className', 'children', 'visibilityHeight']);
        return _react2["default"].createElement(
            _rcAnimate2["default"],
            { component: '', transitionName: 'fade' },
            this.state.visible ? _react2["default"].createElement(
                'div',
                (0, _extends3["default"])({}, divProps, { className: classString, onClick: this.scrollToTop }),
                children || defaultElement
            ) : null
        );
    };

    return BackTop;
}(_react2["default"].Component);

exports["default"] = BackTop;

BackTop.defaultProps = {
    onClick: function onClick() {},

    visibilityHeight: 400,
    target: function target() {
        return typeof window !== 'undefined' ? window : null;
    },

    prefixCls: 'ant-back-top'
};
module.exports = exports['default'];