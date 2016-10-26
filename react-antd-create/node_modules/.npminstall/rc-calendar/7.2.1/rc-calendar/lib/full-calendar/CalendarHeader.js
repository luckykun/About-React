'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

var CalendarHeader = function (_Component) {
  (0, _inherits3["default"])(CalendarHeader, _Component);

  function CalendarHeader() {
    (0, _classCallCheck3["default"])(this, CalendarHeader);
    return (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));
  }

  CalendarHeader.prototype.onYearChange = function onYearChange(year) {
    var newValue = this.props.value.clone();
    newValue.year(parseInt(year, 10));
    this.props.onValueChange(newValue);
  };

  CalendarHeader.prototype.onMonthChange = function onMonthChange(month) {
    var newValue = this.props.value.clone();
    newValue.month(parseInt(month, 10));
    this.props.onValueChange(newValue);
  };

  CalendarHeader.prototype.yearSelectElement = function yearSelectElement(year) {
    var _props = this.props;
    var yearSelectOffset = _props.yearSelectOffset;
    var yearSelectTotal = _props.yearSelectTotal;
    var prefixCls = _props.prefixCls;
    var Select = _props.Select;

    var start = year - yearSelectOffset;
    var end = start + yearSelectTotal;

    var options = [];
    for (var index = start; index < end; index++) {
      options.push(_react2["default"].createElement(
        Select.Option,
        { key: '' + index },
        index
      ));
    }
    return _react2["default"].createElement(
      Select,
      {
        className: prefixCls + '-header-year-select',
        onChange: this.onYearChange.bind(this),
        dropdownStyle: { zIndex: 2000 },
        dropdownMenuStyle: { maxHeight: 250, overflow: 'auto', fontSize: 12 },
        optionLabelProp: 'children',
        value: String(year),
        showSearch: false
      },
      options
    );
  };

  CalendarHeader.prototype.monthSelectElement = function monthSelectElement(month) {
    var props = this.props;
    var localeData = props.value.localeData();
    var t = props.value.clone();
    var prefixCls = props.prefixCls;

    var options = [];
    var Select = props.Select;

    for (var index = 0; index < 12; index++) {
      t.month(index);
      options.push(_react2["default"].createElement(
        Select.Option,
        { key: '' + index },
        localeData.monthsShort(t)
      ));
    }

    return _react2["default"].createElement(
      Select,
      {
        className: prefixCls + '-header-month-select',
        dropdownStyle: { zIndex: 2000 },
        dropdownMenuStyle: { maxHeight: 250, overflow: 'auto', overflowX: 'hidden', fontSize: 12 },
        optionLabelProp: 'children',
        value: String(month),
        showSearch: false,
        onChange: this.onMonthChange.bind(this)
      },
      options
    );
  };

  CalendarHeader.prototype.changeTypeToDate = function changeTypeToDate() {
    this.props.onTypeChange('date');
  };

  CalendarHeader.prototype.changeTypeToMonth = function changeTypeToMonth() {
    this.props.onTypeChange('month');
  };

  CalendarHeader.prototype.render = function render() {
    var _props2 = this.props;
    var value = _props2.value;
    var locale = _props2.locale;
    var prefixCls = _props2.prefixCls;
    var type = _props2.type;
    var showTypeSwitch = _props2.showTypeSwitch;
    var headerComponents = _props2.headerComponents;

    var year = value.year();
    var month = value.month();
    var yearSelect = this.yearSelectElement(year);
    var monthSelect = type === 'month' ? null : this.monthSelectElement(month);
    var switchCls = prefixCls + '-header-switcher';
    var typeSwitcher = showTypeSwitch ? _react2["default"].createElement(
      'span',
      { className: switchCls },
      type === 'date' ? _react2["default"].createElement(
        'span',
        { className: switchCls + '-focus' },
        locale.month
      ) : _react2["default"].createElement(
        'span',
        {
          onClick: this.changeTypeToDate.bind(this),
          className: switchCls + '-normal'
        },
        locale.month
      ),
      type === 'month' ? _react2["default"].createElement(
        'span',
        { className: switchCls + '-focus' },
        locale.year
      ) : _react2["default"].createElement(
        'span',
        {
          onClick: this.changeTypeToMonth.bind(this),
          className: switchCls + '-normal'
        },
        locale.year
      )
    ) : null;

    return _react2["default"].createElement(
      'div',
      { className: prefixCls + '-header' },
      typeSwitcher,
      monthSelect,
      yearSelect,
      headerComponents
    );
  };

  return CalendarHeader;
}(_react.Component);

CalendarHeader.propTypes = {
  value: _react.PropTypes.object,
  locale: _react.PropTypes.object,
  yearSelectOffset: _react.PropTypes.number,
  yearSelectTotal: _react.PropTypes.number,
  onValueChange: _react.PropTypes.func,
  onTypeChange: _react.PropTypes.func,
  Select: _react.PropTypes.func,
  prefixCls: _react.PropTypes.string,
  type: _react.PropTypes.string,
  showTypeSwitch: _react.PropTypes.bool,
  headerComponents: _react.PropTypes.array
};
CalendarHeader.defaultProps = {
  yearSelectOffset: 10,
  yearSelectTotal: 20,
  onValueChange: noop,
  onTypeChange: noop
};

exports["default"] = CalendarHeader;
module.exports = exports['default'];