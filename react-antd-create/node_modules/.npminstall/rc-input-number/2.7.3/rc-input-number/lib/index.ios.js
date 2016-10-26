'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _mixin = require('./mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InputNumber = _react2["default"].createClass({
  displayName: 'InputNumber',

  propTypes: {
    styles: _react.PropTypes.object,
    style: _react.PropTypes.object,
    upStyle: _react.PropTypes.object,
    downStyle: _react.PropTypes.object,
    inputStyle: _react.PropTypes.object,
    onChange: _react.PropTypes.func,
    onFocus: _react.PropTypes.func,
    onBlur: _react.PropTypes.func,
    max: _react.PropTypes.number,
    min: _react.PropTypes.number,
    autoFocus: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    step: _react.PropTypes.number,
    value: _react.PropTypes.number,
    defaultValue: _react.PropTypes.number,
    readOnly: _react.PropTypes.bool
  },

  mixins: [_mixin2["default"]],

  onPressIn: function onPressIn(type) {
    if (this.props.disabled) {
      return;
    }
    var styles = this.props.styles;

    this[type].setNativeProps({
      style: [styles.stepWrap, styles.highlightStepBorderColor]
    });
    this[type + 'Text'].setNativeProps({
      style: [styles.stepText, styles.highlightStepTextColor]
    });
  },
  onPressOut: function onPressOut(type) {
    if (this.props.disabled) {
      return;
    }
    var styles = this.props.styles;

    this[type].setNativeProps({
      style: [styles.stepWrap]
    });
    this[type + 'Text'].setNativeProps({
      style: [styles.stepText]
    });
  },
  onPressInDown: function onPressInDown(e) {
    this.onPressIn('_stepDown');
    this.down(e, true);
  },
  onPressOutDown: function onPressOutDown() {
    this.onPressOut('_stepDown');
    this.stop();
  },
  onPressInUp: function onPressInUp(e) {
    this.onPressIn('_stepUp');
    this.up(e, true);
  },
  onPressOutUp: function onPressOutUp() {
    this.onPressOut('_stepUp');
    this.stop();
  },
  getValueFromEvent: function getValueFromEvent(e) {
    return e.nativeEvent.text;
  },
  render: function render() {
    var _this = this;

    var props = this.props;
    var state = this.state;
    var _props = this.props;
    var style = _props.style;
    var upStyle = _props.upStyle;
    var downStyle = _props.downStyle;
    var inputStyle = _props.inputStyle;
    var styles = _props.styles;

    var editable = !this.props.readOnly && !this.props.disabled;

    var upDisabledStyle = null;
    var downDisabledStyle = null;
    var upDisabledTextStyle = null;
    var downDisabledTextStyle = null;
    var value = state.value;
    if (!isNaN(value)) {
      var val = Number(value);
      if (val >= props.max) {
        upDisabledStyle = styles.stepDisabled;
        upDisabledTextStyle = styles.disabledStepTextColor;
      }
      if (val <= props.min) {
        downDisabledStyle = styles.stepDisabled;
        downDisabledTextStyle = styles.disabledStepTextColor;
      }
    } else {
      upDisabledStyle = styles.stepDisabled;
      downDisabledStyle = styles.stepDisabled;
      upDisabledTextStyle = styles.disabledStepTextColor;
      downDisabledTextStyle = styles.disabledStepTextColor;
    }

    var inputDisabledStyle = null;
    if (props.disabled) {
      upDisabledStyle = styles.stepDisabled;
      downDisabledStyle = styles.stepDisabled;
      upDisabledTextStyle = styles.disabledStepTextColor;
      downDisabledTextStyle = styles.disabledStepTextColor;
      inputDisabledStyle = styles.disabledStepTextColor;
    }

    var inputDisplayValue = void 0;
    if (state.focused) {
      inputDisplayValue = '' + state.inputValue;
    } else {
      inputDisplayValue = '' + state.value;
    }

    if (inputDisplayValue === undefined) {
      inputDisplayValue = '';
    }

    return _react2["default"].createElement(
      _reactNative.View,
      { style: [styles.container, style] },
      _react2["default"].createElement(
        _reactNative.TouchableWithoutFeedback,
        {
          onPressIn: editable && !downDisabledStyle ? this.onPressInDown : undefined,
          onPressOut: editable && !downDisabledStyle ? this.onPressOutDown : undefined
        },
        _react2["default"].createElement(
          _reactNative.View,
          {
            ref: function ref(component) {
              return _this._stepDown = component;
            },
            style: [styles.stepWrap, downDisabledStyle, downStyle]
          },
          _react2["default"].createElement(
            _reactNative.Text,
            {
              ref: function ref(component) {
                return _this._stepDownText = component;
              },
              style: [styles.stepText, downDisabledTextStyle]
            },
            '-'
          )
        )
      ),
      _react2["default"].createElement(_reactNative.TextInput, {
        style: [styles.input, inputDisabledStyle, inputStyle],
        ref: 'input',
        value: inputDisplayValue,
        autoFocus: props.autoFocus,
        editable: editable,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        underlineColorAndroid: 'transparent'
      }),
      _react2["default"].createElement(
        _reactNative.TouchableWithoutFeedback,
        {
          onPressIn: editable && !upDisabledStyle ? this.onPressInUp : undefined,
          onPressOut: editable && !upDisabledStyle ? this.onPressOutUp : undefined
        },
        _react2["default"].createElement(
          _reactNative.View,
          {
            ref: function ref(component) {
              return _this._stepUp = component;
            },
            style: [styles.stepWrap, upDisabledStyle, upStyle]
          },
          _react2["default"].createElement(
            _reactNative.Text,
            {
              ref: function ref(component) {
                return _this._stepUpText = component;
              },
              style: [styles.stepText, upDisabledTextStyle]
            },
            '+'
          )
        )
      )
    );
  }
});

exports["default"] = InputNumber;
module.exports = exports['default'];