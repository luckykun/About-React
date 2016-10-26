'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mapSelf = require('rc-util/lib/Children/mapSelf');

var _mapSelf2 = _interopRequireDefault(_mapSelf);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TodayButton = require('../calendar/TodayButton');

var _TodayButton2 = _interopRequireDefault(_TodayButton);

var _OkButton = require('../calendar/OkButton');

var _OkButton2 = _interopRequireDefault(_OkButton);

var _TimePickerButton = require('../calendar/TimePickerButton');

var _TimePickerButton2 = _interopRequireDefault(_TimePickerButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CalendarFooter = _react2["default"].createClass({
  displayName: 'CalendarFooter',

  propTypes: {
    prefixCls: _react.PropTypes.string,
    showDateInput: _react.PropTypes.bool,
    disabledTime: _react.PropTypes.any,
    timePicker: _react.PropTypes.element,
    selectedValue: _react.PropTypes.any,
    showOk: _react.PropTypes.bool,
    onSelect: _react.PropTypes.func,
    value: _react.PropTypes.object,
    renderFooter: _react.PropTypes.func,
    defaultValue: _react.PropTypes.object
  },

  onSelect: function onSelect(value) {
    this.props.onSelect(value);
  },
  getRootDOMNode: function getRootDOMNode() {
    return _reactDom2["default"].findDOMNode(this);
  },
  render: function render() {
    var props = this.props;
    var value = props.value;
    var prefixCls = props.prefixCls;
    var showOk = props.showOk;
    var timePicker = props.timePicker;
    var renderFooter = props.renderFooter;

    var footerEl = null;
    var extraFooter = renderFooter();
    if (props.showToday || timePicker || extraFooter) {
      var _cx;

      var nowEl = void 0;
      if (props.showToday) {
        nowEl = _react2["default"].createElement(_TodayButton2["default"], (0, _extends3["default"])({}, props, { value: value }));
      }
      var okBtn = void 0;
      if (showOk === true || showOk !== false && !!props.timePicker) {
        okBtn = _react2["default"].createElement(_OkButton2["default"], props);
      }
      var timePickerBtn = void 0;
      if (!!props.timePicker) {
        timePickerBtn = _react2["default"].createElement(_TimePickerButton2["default"], props);
      }

      var footerBtn = void 0;
      if (nowEl || okBtn) {
        footerBtn = _react2["default"].createElement(
          'span',
          { className: prefixCls + '-footer-btn' },
          (0, _mapSelf2["default"])([nowEl, timePickerBtn, okBtn])
        );
      }
      var cls = (0, _classnames2["default"])((_cx = {}, (0, _defineProperty3["default"])(_cx, prefixCls + '-footer', true), (0, _defineProperty3["default"])(_cx, prefixCls + '-footer-show-ok', okBtn), _cx));
      footerEl = _react2["default"].createElement(
        'div',
        { className: cls },
        extraFooter,
        footerBtn
      );
    }
    return footerEl;
  }
});

exports["default"] = CalendarFooter;
module.exports = exports['default'];