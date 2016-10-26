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

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _isCssAnimationSupported = require('../_util/isCssAnimationSupported');

var _isCssAnimationSupported2 = _interopRequireDefault(_isCssAnimationSupported);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Spin = function (_React$Component) {
    (0, _inherits3["default"])(Spin, _React$Component);

    function Spin(props) {
        (0, _classCallCheck3["default"])(this, Spin);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        var spinning = props.spinning;
        _this.state = {
            spinning: spinning
        };
        return _this;
    }

    Spin.prototype.isNestedPattern = function isNestedPattern() {
        return !!(this.props && this.props.children);
    };

    Spin.prototype.componentDidMount = function componentDidMount() {
        if (!(0, _isCssAnimationSupported2["default"])()) {
            // Show text in IE8/9
            (0, _reactDom.findDOMNode)(this).className += ' ' + this.props.prefixCls + '-show-text';
        }
    };

    Spin.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
    };

    Spin.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        var currentSpinning = this.props.spinning;
        var spinning = nextProps.spinning;
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        if (currentSpinning && !spinning) {
            this.debounceTimeout = setTimeout(function () {
                return _this2.setState({ spinning: spinning });
            }, 500);
        } else {
            this.setState({ spinning: spinning });
        }
    };

    Spin.prototype.render = function render() {
        var _classNames;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['className', 'size', 'prefixCls', 'tip']);

        var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var className = _splitObject2$.className;
        var size = _splitObject2$.size;
        var prefixCls = _splitObject2$.prefixCls;
        var tip = _splitObject2$.tip;
        var restProps = _splitObject2[1];
        var spinning = this.state.spinning;

        var spinClassName = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-spinning', spinning), (0, _defineProperty3["default"])(_classNames, prefixCls + '-show-text', !!this.props.tip), (0, _defineProperty3["default"])(_classNames, className, !!className), _classNames));
        // fix https://fb.me/react-unknown-prop
        var divProps = (0, _omit2["default"])(restProps, ['spinning']);
        var spinElement = _react2["default"].createElement(
            'div',
            (0, _extends3["default"])({}, divProps, { className: spinClassName }),
            _react2["default"].createElement('span', { className: prefixCls + '-dot' }),
            tip ? _react2["default"].createElement(
                'div',
                { className: prefixCls + '-text' },
                tip
            ) : null
        );
        if (this.isNestedPattern()) {
            return _react2["default"].createElement(
                'div',
                (0, _extends3["default"])({}, divProps, { className: spinning ? prefixCls + '-nested-loading' : '' }),
                spinElement,
                _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-container' },
                    this.props.children
                )
            );
        }
        return spinElement;
    };

    return Spin;
}(_react2["default"].Component);

exports["default"] = Spin;

Spin.defaultProps = {
    prefixCls: 'ant-spin',
    spinning: true,
    size: 'default'
};
Spin.propTypes = {
    prefixCls: _react.PropTypes.string,
    className: _react.PropTypes.string,
    spinning: _react.PropTypes.bool,
    size: _react.PropTypes.oneOf(['small', 'default', 'large'])
};
module.exports = exports['default'];