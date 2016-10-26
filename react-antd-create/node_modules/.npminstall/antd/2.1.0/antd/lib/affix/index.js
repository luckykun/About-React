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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _addEventListener = require('rc-util/lib/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _getScroll = require('../_util/getScroll');

var _getScroll2 = _interopRequireDefault(_getScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getTargetRect(target) {
    return target !== window ? target.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
}
function getOffset(element, target) {
    var elemRect = element.getBoundingClientRect();
    var targetRect = getTargetRect(target);
    var scrollTop = (0, _getScroll2["default"])(target, true);
    var scrollLeft = (0, _getScroll2["default"])(target, false);
    var docElem = window.document.body;
    var clientTop = docElem.clientTop || 0;
    var clientLeft = docElem.clientLeft || 0;
    return {
        top: elemRect.top - targetRect.top + scrollTop - clientTop,
        left: elemRect.left - targetRect.left + scrollLeft - clientLeft
    };
}

var Affix = function (_React$Component) {
    (0, _inherits3["default"])(Affix, _React$Component);

    function Affix(props) {
        (0, _classCallCheck3["default"])(this, Affix);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.updatePosition = function (e) {
            var _this$props = _this.props;
            var offsetTop = _this$props.offsetTop;
            var offsetBottom = _this$props.offsetBottom;
            var offset = _this$props.offset;
            var target = _this$props.target;

            var targetNode = target();
            // Backwards support
            offsetTop = offsetTop || offset;
            var scrollTop = (0, _getScroll2["default"])(targetNode, true);
            var affixNode = _reactDom2["default"].findDOMNode(_this);
            var elemOffset = getOffset(affixNode, targetNode);
            var elemSize = {
                width: _this.refs.fixedNode.offsetWidth,
                height: _this.refs.fixedNode.offsetHeight
            };
            var offsetMode = {
                top: null,
                bottom: null
            };
            // Default to `offsetTop=0`.
            if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
                offsetMode.top = true;
                offsetTop = 0;
            } else {
                offsetMode.top = typeof offsetTop === 'number';
                offsetMode.bottom = typeof offsetBottom === 'number';
            }
            var targetRect = getTargetRect(targetNode);
            var targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
            if (scrollTop > elemOffset.top - offsetTop && offsetMode.top) {
                // Fixed Top
                _this.setAffixStyle(e, {
                    position: 'fixed',
                    top: targetRect.top + offsetTop,
                    left: targetRect.left + elemOffset.left,
                    width: affixNode.offsetWidth
                });
                _this.setPlaceholderStyle(e, {
                    width: affixNode.offsetWidth,
                    height: affixNode.offsetHeight
                });
            } else if (scrollTop < elemOffset.top + elemSize.height + offsetBottom - targetInnerHeight && offsetMode.bottom) {
                // Fixed Bottom
                var targetBottomOffet = targetNode === window ? 0 : window.innerHeight - targetRect.bottom;
                _this.setAffixStyle(e, {
                    position: 'fixed',
                    bottom: targetBottomOffet + offsetBottom,
                    left: targetRect.left + elemOffset.left,
                    width: affixNode.offsetWidth
                });
                _this.setPlaceholderStyle(e, {
                    width: affixNode.offsetWidth,
                    height: affixNode.offsetHeight
                });
            } else {
                _this.setAffixStyle(e, null);
                _this.setPlaceholderStyle(e, null);
            }
        };
        _this.state = {
            affixStyle: null,
            placeholderStyle: null
        };
        return _this;
    }

    Affix.prototype.setAffixStyle = function setAffixStyle(e, affixStyle) {
        var _this2 = this;

        var _props = this.props;
        var onChange = _props.onChange;
        var target = _props.target;

        var originalAffixStyle = this.state.affixStyle;
        var isWindow = target() === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if ((0, _shallowequal2["default"])(affixStyle, originalAffixStyle)) {
            return;
        }
        this.setState({ affixStyle: affixStyle }, function () {
            var affixed = !!_this2.state.affixStyle;
            if (affixStyle && !originalAffixStyle || !affixStyle && originalAffixStyle) {
                onChange(affixed);
            }
        });
    };

    Affix.prototype.setPlaceholderStyle = function setPlaceholderStyle(e, placeholderStyle) {
        var originalPlaceholderStyle = this.state.placeholderStyle;
        if (e.type === 'resize') {
            return;
        }
        if ((0, _shallowequal2["default"])(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        this.setState({ placeholderStyle: placeholderStyle });
    };

    Affix.prototype.componentDidMount = function componentDidMount() {
        var target = this.props.target;
        this.setTargetEventListeners(target);
    };

    Affix.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.props.target !== nextProps.target) {
            this.clearScrollEventListeners();
            this.setTargetEventListeners(nextProps.target);
            // Mock Event object.
            this.updatePosition({});
        }
    };

    Affix.prototype.componentWillUnmount = function componentWillUnmount() {
        this.clearScrollEventListeners();
    };

    Affix.prototype.setTargetEventListeners = function setTargetEventListeners(getTarget) {
        var target = getTarget();
        this.scrollEvent = (0, _addEventListener2["default"])(target, 'scroll', this.updatePosition);
        this.resizeEvent = (0, _addEventListener2["default"])(target, 'resize', this.updatePosition);
    };

    Affix.prototype.clearScrollEventListeners = function clearScrollEventListeners() {
        var _this3 = this;

        ['scrollEvent', 'resizeEvent'].forEach(function (name) {
            if (_this3[name]) {
                _this3[name].remove();
            }
        });
    };

    Affix.prototype.render = function render() {
        var className = (0, _classnames2["default"])((0, _defineProperty3["default"])({}, this.props.prefixCls, this.state.affixStyle));
        var props = (0, _omit2["default"])(this.props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target']);
        return _react2["default"].createElement(
            'div',
            (0, _extends3["default"])({}, props, { style: this.state.placeholderStyle }),
            _react2["default"].createElement(
                'div',
                { className: className, ref: 'fixedNode', style: this.state.affixStyle },
                this.props.children
            )
        );
    };

    return Affix;
}(_react2["default"].Component);

exports["default"] = Affix;

Affix.propTypes = {
    offsetTop: _react2["default"].PropTypes.number,
    offsetBottom: _react2["default"].PropTypes.number,
    target: _react2["default"].PropTypes.func
};
Affix.defaultProps = {
    target: function target() {
        return typeof window !== 'undefined' ? window : null;
    },
    onChange: function onChange() {},

    prefixCls: 'ant-affix'
};
module.exports = exports['default'];