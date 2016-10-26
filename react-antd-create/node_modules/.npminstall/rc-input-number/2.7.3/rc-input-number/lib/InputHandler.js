'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _touchableFeedback = require('./touchableFeedback');

var _touchableFeedback2 = _interopRequireDefault(_touchableFeedback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InputHandler = function (_Component) {
  (0, _inherits3["default"])(InputHandler, _Component);

  function InputHandler() {
    (0, _classCallCheck3["default"])(this, InputHandler);
    return (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));
  }

  InputHandler.prototype.render = function render() {
    var _classNames;

    var props = (0, _extends3["default"])({}, this.props);
    var prefixCls = props.prefixCls;
    var wrapCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, '' + props.className, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-handler-active', !props.disabled && props.touchFeedback), _classNames));
    ['prefixCls', 'touchFeedback'].forEach(function (prop) {
      if (props.hasOwnProperty(prop)) {
        delete props[prop];
      }
    });

    return _react2["default"].createElement(
      'span',
      (0, _extends3["default"])({}, props, { className: wrapCls }),
      props.children
    );
  };

  return InputHandler;
}(_react.Component);

InputHandler.defaultProps = {
  prefixCls: 'am-stepper'
};
exports["default"] = (0, _touchableFeedback2["default"])(InputHandler, 'InputHandler');
module.exports = exports['default'];