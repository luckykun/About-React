'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = _react2["default"].createClass({
  displayName: 'Header',

  propTypes: {
    format: _react.PropTypes.string,
    prefixCls: _react.PropTypes.string,
    disabledDate: _react.PropTypes.func,
    placeholder: _react.PropTypes.string,
    clearText: _react.PropTypes.string,
    value: _react.PropTypes.object,
    hourOptions: _react.PropTypes.array,
    minuteOptions: _react.PropTypes.array,
    secondOptions: _react.PropTypes.array,
    disabledHours: _react.PropTypes.func,
    disabledMinutes: _react.PropTypes.func,
    disabledSeconds: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    onClear: _react.PropTypes.func,
    onEsc: _react.PropTypes.func,
    allowEmpty: _react.PropTypes.bool,
    defaultOpenValue: _react.PropTypes.object,
    currentSelectPanel: _react.PropTypes.string
  },

  getInitialState: function getInitialState() {
    var _props = this.props;
    var value = _props.value;
    var format = _props.format;

    return {
      str: value && value.format(format) || '',
      invalid: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value;
    var format = nextProps.format;

    this.setState({
      str: value && value.format(format) || '',
      invalid: false
    });
  },
  onInputChange: function onInputChange(event) {
    var str = event.target.value;
    this.setState({
      str: str
    });
    var _props2 = this.props;
    var format = _props2.format;
    var hourOptions = _props2.hourOptions;
    var minuteOptions = _props2.minuteOptions;
    var secondOptions = _props2.secondOptions;
    var disabledHours = _props2.disabledHours;
    var disabledMinutes = _props2.disabledMinutes;
    var disabledSeconds = _props2.disabledSeconds;
    var onChange = _props2.onChange;
    var allowEmpty = _props2.allowEmpty;


    if (str) {
      var originalValue = this.props.value;
      var value = this.getProtoValue().clone();
      var parsed = (0, _moment2["default"])(str, format, true);
      if (!parsed.isValid()) {
        this.setState({
          invalid: true
        });
        return;
      }
      value.hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

      // if time value not allowed, response warning.
      if (hourOptions.indexOf(value.hour()) < 0 || minuteOptions.indexOf(value.minute()) < 0 || secondOptions.indexOf(value.second()) < 0) {
        this.setState({
          invalid: true
        });
        return;
      }

      // if time value is disabled, response warning.
      var disabledHourOptions = disabledHours();
      var disabledMinuteOptions = disabledMinutes(value.hour());
      var disabledSecondOptions = disabledSeconds(value.hour(), value.minute());
      if (disabledHourOptions && disabledHourOptions.indexOf(value.hour()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.minute()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.second()) >= 0) {
        this.setState({
          invalid: true
        });
        return;
      }

      if (originalValue) {
        if (originalValue.hour() !== value.hour() || originalValue.minute() !== value.minute() || originalValue.second() !== value.second()) {
          // keep other fields for rc-calendar
          var changedValue = originalValue.clone();
          changedValue.hour(value.hour());
          changedValue.minute(value.minute());
          changedValue.second(value.second());
          onChange(changedValue);
        }
      } else if (originalValue !== value) {
        onChange(value);
      }
    } else if (allowEmpty) {
      onChange(null);
    } else {
      this.setState({
        invalid: true
      });
      return;
    }

    this.setState({
      invalid: false
    });
  },
  onKeyDown: function onKeyDown(e) {
    if (e.keyCode === 27) {
      this.props.onEsc();
    }
  },
  onClear: function onClear() {
    this.setState({ str: '' });
    this.props.onClear();
  },
  getClearButton: function getClearButton() {
    var _props3 = this.props;
    var prefixCls = _props3.prefixCls;
    var allowEmpty = _props3.allowEmpty;

    if (!allowEmpty) {
      return null;
    }
    return _react2["default"].createElement('a', {
      className: prefixCls + '-clear-btn',
      role: 'button',
      title: this.props.clearText,
      onMouseDown: this.onClear
    });
  },
  getProtoValue: function getProtoValue() {
    return this.props.value || this.props.defaultOpenValue;
  },
  getInput: function getInput() {
    var _props4 = this.props;
    var prefixCls = _props4.prefixCls;
    var placeholder = _props4.placeholder;
    var _state = this.state;
    var invalid = _state.invalid;
    var str = _state.str;

    var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
    return _react2["default"].createElement('input', {
      className: prefixCls + '-input  ' + invalidClass,
      ref: 'input',
      onKeyDown: this.onKeyDown,
      value: str,
      placeholder: placeholder,
      onChange: this.onInputChange
    });
  },
  render: function render() {
    var prefixCls = this.props.prefixCls;

    return _react2["default"].createElement(
      'div',
      { className: prefixCls + '-input-wrap' },
      this.getInput(),
      this.getClearButton()
    );
  }
});

exports["default"] = Header;
module.exports = exports['default'];