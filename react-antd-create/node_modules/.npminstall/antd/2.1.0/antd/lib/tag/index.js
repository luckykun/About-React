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

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Tag = function (_React$Component) {
    (0, _inherits3["default"])(Tag, _React$Component);

    function Tag(props) {
        (0, _classCallCheck3["default"])(this, Tag);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.close = function (e) {
            _this.props.onClose(e);
            if (e.defaultPrevented) {
                return;
            }
            var dom = _reactDom2["default"].findDOMNode(_this);
            dom.style.width = dom.getBoundingClientRect().width + 'px';
            // It's Magic Code, don't know why
            dom.style.width = dom.getBoundingClientRect().width + 'px';
            _this.setState({
                closing: true
            });
        };
        _this.animationEnd = function (key, existed) {
            if (!existed && !_this.state.closed) {
                _this.setState({
                    closed: true,
                    closing: false
                });
                _this.props.afterClose();
            }
        };
        _this.state = {
            closing: false,
            closed: false
        };
        return _this;
    }

    Tag.prototype.render = function render() {
        var _classNames;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['prefixCls', 'closable', 'color', 'className', 'children']);

        var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var prefixCls = _splitObject2$.prefixCls;
        var closable = _splitObject2$.closable;
        var color = _splitObject2$.color;
        var className = _splitObject2$.className;
        var children = _splitObject2$.children;
        var otherProps = _splitObject2[1];

        var closeIcon = closable ? _react2["default"].createElement(_icon2["default"], { type: 'cross', onClick: this.close }) : '';
        var classString = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + color, !!color), (0, _defineProperty3["default"])(_classNames, prefixCls + '-has-color', !!color), (0, _defineProperty3["default"])(_classNames, prefixCls + '-close', this.state.closing), (0, _defineProperty3["default"])(_classNames, className, !!className), _classNames));
        // fix https://fb.me/react-unknown-prop
        var divProps = (0, _omit2["default"])(otherProps, ['onClose', 'afterClose']);
        return _react2["default"].createElement(
            _rcAnimate2["default"],
            { component: '', showProp: 'data-show', transitionName: prefixCls + '-zoom', transitionAppear: true, onEnd: this.animationEnd },
            this.state.closed ? null : _react2["default"].createElement(
                'div',
                (0, _extends3["default"])({ 'data-show': !this.state.closing }, divProps, { className: classString, style: { backgroundColor: /blue|red|green|yellow/.test(color) ? null : color } }),
                _react2["default"].createElement(
                    'span',
                    { className: prefixCls + '-text' },
                    children
                ),
                closeIcon
            )
        );
    };

    return Tag;
}(_react2["default"].Component);

exports["default"] = Tag;

Tag.defaultProps = {
    prefixCls: 'ant-tag',
    closable: false,
    onClose: function onClose() {},
    afterClose: function afterClose() {}
};
module.exports = exports['default'];