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

var _reactDom = require('react-dom');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === 'string';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child) {
    if (isString(child.type) && isTwoCNChar(child.props.children)) {
        return _react2["default"].cloneElement(child, {}, child.props.children.split('').join(' '));
    }
    if (isString(child)) {
        if (isTwoCNChar(child)) {
            child = child.split('').join(' ');
        }
        return _react2["default"].createElement(
            'span',
            null,
            child
        );
    }
    return child;
}

var Button = function (_React$Component) {
    (0, _inherits3["default"])(Button, _React$Component);

    function Button() {
        (0, _classCallCheck3["default"])(this, Button);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

        _this.clearButton = function (button) {
            button.className = button.className.replace(' ' + _this.props.prefixCls + '-clicked', '');
        };
        _this.handleClick = function (e) {
            // Add click effect
            var buttonNode = (0, _reactDom.findDOMNode)(_this);
            _this.clearButton(buttonNode);
            _this.clickedTimeout = setTimeout(function () {
                return buttonNode.className += ' ' + _this.props.prefixCls + '-clicked';
            }, 10);
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
                return _this.clearButton(buttonNode);
            }, 500);
            _this.props.onClick(e);
        };
        // Handle auto focus when click button in Chrome
        _this.handleMouseUp = function (e) {
            (0, _reactDom.findDOMNode)(_this).blur();
            if (_this.props.onMouseUp) {
                _this.props.onMouseUp(e);
            }
        };
        return _this;
    }

    Button.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.clickedTimeout) {
            clearTimeout(this.clickedTimeout);
        }
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    };

    Button.prototype.render = function render() {
        var _classNames;

        var props = this.props;

        var _splitObject = (0, _splitObject4["default"])(props, ['type', 'shape', 'size', 'className', 'htmlType', 'children', 'icon', 'loading', 'prefixCls']);

        var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var type = _splitObject2$.type;
        var shape = _splitObject2$.shape;
        var size = _splitObject2$.size;
        var className = _splitObject2$.className;
        var htmlType = _splitObject2$.htmlType;
        var children = _splitObject2$.children;
        var icon = _splitObject2$.icon;
        var loading = _splitObject2$.loading;
        var prefixCls = _splitObject2$.prefixCls;
        var others = _splitObject2[1];
        // large => lg
        // small => sm

        var sizeCls = {
            large: 'lg',
            small: 'sm'
        }[size] || '';
        var classes = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + type, type), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + shape, shape), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + sizeCls, sizeCls), (0, _defineProperty3["default"])(_classNames, prefixCls + '-icon-only', !children && icon), (0, _defineProperty3["default"])(_classNames, prefixCls + '-loading', loading), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
        var iconType = loading ? 'loading' : icon;
        var kids = _react2["default"].Children.map(children, insertSpace);
        return _react2["default"].createElement(
            'button',
            (0, _extends3["default"])({}, others, { type: htmlType || 'button', className: classes, onMouseUp: this.handleMouseUp, onClick: this.handleClick }),
            iconType ? _react2["default"].createElement(_icon2["default"], { type: iconType }) : null,
            kids
        );
    };

    return Button;
}(_react2["default"].Component);

exports["default"] = Button;

Button.defaultProps = {
    prefixCls: 'ant-btn',
    onClick: function onClick() {},

    loading: false
};
Button.propTypes = {
    type: _react2["default"].PropTypes.string,
    shape: _react2["default"].PropTypes.oneOf(['circle', 'circle-outline']),
    size: _react2["default"].PropTypes.oneOf(['large', 'default', 'small']),
    htmlType: _react2["default"].PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: _react2["default"].PropTypes.func,
    loading: _react2["default"].PropTypes.bool,
    className: _react2["default"].PropTypes.string,
    icon: _react2["default"].PropTypes.string
};
module.exports = exports['default'];