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

var _reactDom = require('react-dom');

var _isCssAnimationSupported = require('../_util/isCssAnimationSupported');

var _isCssAnimationSupported2 = _interopRequireDefault(_isCssAnimationSupported);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getNumberArray(num) {
    return num ? num.toString().split('').reverse().map(function (i) {
        return Number(i);
    }) : [];
}

var ScrollNumber = function (_Component) {
    (0, _inherits3["default"])(ScrollNumber, _Component);

    function ScrollNumber(props) {
        (0, _classCallCheck3["default"])(this, ScrollNumber);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.call(this, props));

        _this.state = {
            animateStarted: true,
            count: props.count
        };
        return _this;
    }

    ScrollNumber.prototype.componentDidMount = function componentDidMount() {
        if (!(0, _isCssAnimationSupported2["default"])()) {
            (0, _reactDom.findDOMNode)(this).className += ' not-support-css-animation';
        }
    };

    ScrollNumber.prototype.getPositionByNum = function getPositionByNum(num, i) {
        if (this.state.animateStarted) {
            return 10 + num;
        }
        var currentDigit = getNumberArray(this.state.count)[i];
        var lastDigit = getNumberArray(this.lastCount)[i];
        // 同方向则在同一侧切换数字
        if (this.state.count > this.lastCount) {
            if (currentDigit >= lastDigit) {
                return 10 + num;
            }
            return 20 + num;
        }
        if (currentDigit <= lastDigit) {
            return 10 + num;
        }
        return num;
    };

    ScrollNumber.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if ('count' in nextProps) {
            if (this.state.count === nextProps.count) {
                return;
            }
            this.lastCount = this.state.count;
            // 复原数字初始位置
            this.setState({
                animateStarted: true
            }, function () {
                // 等待数字位置复原完毕
                // 开始设置完整的数字
                setTimeout(function () {
                    _this2.setState({
                        animateStarted: false,
                        count: nextProps.count
                    }, function () {
                        _this2.props.onAnimated();
                    });
                }, 5);
            });
        }
    };

    ScrollNumber.prototype.renderNumberList = function renderNumberList(position) {
        var childrenToReturn = [];
        for (var i = 0; i < 30; i++) {
            var currentClassName = position === i ? 'current' : null;
            childrenToReturn.push(_react2["default"].createElement(
                'p',
                { key: i, className: currentClassName },
                i % 10
            ));
        }
        return childrenToReturn;
    };

    ScrollNumber.prototype.renderCurrentNumber = function renderCurrentNumber(num, i) {
        var position = this.getPositionByNum(num, i);
        var height = this.props.height;
        var removeTransition = this.state.animateStarted || getNumberArray(this.lastCount)[i] === undefined;
        return (0, _react.createElement)('span', {
            className: this.props.prefixCls + '-only',
            style: {
                transition: removeTransition && 'none',
                WebkitTransform: 'translateY(' + -position * height + 'px)',
                transform: 'translateY(' + -position * height + 'px)',
                height: height
            },
            key: i
        }, this.renderNumberList(position));
    };

    ScrollNumber.prototype.renderNumberElement = function renderNumberElement() {
        var _this3 = this;

        var state = this.state;
        if (!state.count || isNaN(state.count)) {
            return state.count;
        }
        return getNumberArray(state.count).map(function (num, i) {
            return _this3.renderCurrentNumber(num, i);
        }).reverse();
    };

    ScrollNumber.prototype.render = function render() {
        // fix https://fb.me/react-unknown-prop
        var props = (0, _objectAssign2["default"])({}, (0, _omit2["default"])(this.props, ['count', 'onAnimated', 'component', 'prefixCls']), {
            className: this.props.prefixCls + ' ' + this.props.className
        });
        return (0, _react.createElement)(this.props.component, props, this.renderNumberElement());
    };

    return ScrollNumber;
}(_react.Component);

exports["default"] = ScrollNumber;

ScrollNumber.defaultProps = {
    prefixCls: 'ant-scroll-number',
    count: null,
    component: 'sup',
    onAnimated: function onAnimated() {},

    height: 18
};
ScrollNumber.propTypes = {
    count: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number]),
    component: _react2["default"].PropTypes.string,
    onAnimated: _react2["default"].PropTypes.func,
    height: _react2["default"].PropTypes.number
};
module.exports = exports['default'];