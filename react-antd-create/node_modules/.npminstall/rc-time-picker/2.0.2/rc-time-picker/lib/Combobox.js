'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var formatOption = function formatOption(option, disabledOptions) {
  var value = '' + option;
  if (option < 10) {
    value = '0' + option;
  }

  var disabled = false;
  if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
    disabled = true;
  }

  return {
    value: value,
    disabled: disabled
  };
};

var Combobox = _react2["default"].createClass({
  displayName: 'Combobox',

  propTypes: {
    format: _react.PropTypes.string,
    defaultOpenValue: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    value: _react.PropTypes.object,
    onChange: _react.PropTypes.func,
    showHour: _react.PropTypes.bool,
    showSecond: _react.PropTypes.bool,
    hourOptions: _react.PropTypes.array,
    minuteOptions: _react.PropTypes.array,
    secondOptions: _react.PropTypes.array,
    disabledHours: _react.PropTypes.func,
    disabledMinutes: _react.PropTypes.func,
    disabledSeconds: _react.PropTypes.func,
    onCurrentSelectPanelChange: _react.PropTypes.func
  },

  onItemChange: function onItemChange(type, itemValue) {
    var _props = this.props;
    var onChange = _props.onChange;
    var defaultOpenValue = _props.defaultOpenValue;

    var value = (this.props.value || defaultOpenValue).clone();
    if (type === 'hour') {
      value.hour(itemValue);
    } else if (type === 'minute') {
      value.minute(itemValue);
    } else {
      value.second(itemValue);
    }
    onChange(value);
  },
  onEnterSelectPanel: function onEnterSelectPanel(range) {
    this.props.onCurrentSelectPanelChange(range);
  },
  getHourSelect: function getHourSelect(hour) {
    var _props2 = this.props;
    var prefixCls = _props2.prefixCls;
    var hourOptions = _props2.hourOptions;
    var disabledHours = _props2.disabledHours;
    var showHour = _props2.showHour;

    if (!showHour) {
      return null;
    }
    var disabledOptions = disabledHours();

    return _react2["default"].createElement(_Select2["default"], {
      prefixCls: prefixCls,
      options: hourOptions.map(function (option) {
        return formatOption(option, disabledOptions);
      }),
      selectedIndex: hourOptions.indexOf(hour),
      type: 'hour',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'hour')
    });
  },
  getMinuteSelect: function getMinuteSelect(minute) {
    var _props3 = this.props;
    var prefixCls = _props3.prefixCls;
    var minuteOptions = _props3.minuteOptions;
    var disabledMinutes = _props3.disabledMinutes;
    var defaultOpenValue = _props3.defaultOpenValue;

    var value = this.props.value || defaultOpenValue;
    var disabledOptions = disabledMinutes(value.hour());

    return _react2["default"].createElement(_Select2["default"], {
      prefixCls: prefixCls,
      options: minuteOptions.map(function (option) {
        return formatOption(option, disabledOptions);
      }),
      selectedIndex: minuteOptions.indexOf(minute),
      type: 'minute',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'minute')
    });
  },
  getSecondSelect: function getSecondSelect(second) {
    var _props4 = this.props;
    var prefixCls = _props4.prefixCls;
    var secondOptions = _props4.secondOptions;
    var disabledSeconds = _props4.disabledSeconds;
    var showSecond = _props4.showSecond;
    var defaultOpenValue = _props4.defaultOpenValue;

    if (!showSecond) {
      return null;
    }
    var value = this.props.value || defaultOpenValue;
    var disabledOptions = disabledSeconds(value.hour(), value.minute());

    return _react2["default"].createElement(_Select2["default"], {
      prefixCls: prefixCls,
      options: secondOptions.map(function (option) {
        return formatOption(option, disabledOptions);
      }),
      selectedIndex: secondOptions.indexOf(second),
      type: 'second',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'second')
    });
  },
  render: function render() {
    var _props5 = this.props;
    var prefixCls = _props5.prefixCls;
    var defaultOpenValue = _props5.defaultOpenValue;

    var value = this.props.value || defaultOpenValue;
    return _react2["default"].createElement(
      'div',
      { className: prefixCls + '-combobox' },
      this.getHourSelect(value.hour()),
      this.getMinuteSelect(value.minute()),
      this.getSecondSelect(value.second())
    );
  }
});

exports["default"] = Combobox;
module.exports = exports['default'];