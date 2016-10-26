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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _RangeCalendar = require('rc-calendar/lib/RangeCalendar');

var _RangeCalendar2 = _interopRequireDefault(_RangeCalendar);

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RangePicker = function (_React$Component) {
    (0, _inherits3["default"])(RangePicker, _React$Component);

    function RangePicker(props) {
        (0, _classCallCheck3["default"])(this, RangePicker);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.clearSelection = function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this.setState({ value: [] });
            _this.handleChange([]);
        };
        _this.handleChange = function (value) {
            var props = _this.props;
            if (!('value' in props)) {
                _this.setState({ value: value });
            }
            props.onChange(value, [value[0] && value[0].format(props.format) || '', value[1] && value[1].format(props.format) || '']);
        };
        _this.state = {
            value: props.value || props.defaultValue || []
        };
        return _this;
    }

    RangePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value || []
            });
        }
    };

    RangePicker.prototype.render = function render() {
        var _this2 = this;

        var props = this.props;
        var disabledDate = props.disabledDate;
        var showTime = props.showTime;
        var prefixCls = props.prefixCls;
        var popupStyle = props.popupStyle;
        var style = props.style;
        var onOk = props.onOk;
        var locale = props.locale;

        var state = this.state;
        var calendarClassName = (0, _classnames2["default"])((0, _defineProperty3["default"])({}, prefixCls + '-time', showTime));
        // 需要选择时间时，点击 ok 时才触发 onChange
        var pickerChangeHandler = {
            onChange: this.handleChange
        };
        var calendarHandler = {
            onOk: this.handleChange
        };
        if (props.timePicker) {
            pickerChangeHandler.onChange = function (value) {
                return _this2.handleChange(value);
            };
        } else {
            calendarHandler = {};
        }
        var startPlaceholder = 'startPlaceholder' in this.props ? props.startPlaceholder : locale.lang.rangePlaceholder[0];
        var endPlaceholder = 'endPlaceholder' in props ? props.endPlaceholder : locale.lang.rangePlaceholder[1];
        var calendar = _react2["default"].createElement(_RangeCalendar2["default"], (0, _extends3["default"])({}, calendarHandler, { prefixCls: prefixCls, className: calendarClassName, timePicker: props.timePicker, disabledDate: disabledDate, dateInputPlaceholder: [startPlaceholder, endPlaceholder], locale: locale.lang, onOk: onOk, defaultValue: props.defaultPickerValue || [(0, _moment2["default"])(), (0, _moment2["default"])()] }));
        var clearIcon = !props.disabled && state.value && (state.value[0] || state.value[1]) ? _react2["default"].createElement(_icon2["default"], { type: 'cross-circle', className: prefixCls + '-picker-clear', onClick: this.clearSelection }) : null;
        return _react2["default"].createElement(
            'span',
            { className: props.pickerClass, style: style },
            _react2["default"].createElement(
                _Picker2["default"],
                (0, _extends3["default"])({}, props, pickerChangeHandler, { calendar: calendar, value: state.value, prefixCls: prefixCls + '-picker-container', style: popupStyle }),
                function (_ref) {
                    var value = _ref.value;

                    var start = value[0];
                    var end = value[1];
                    return _react2["default"].createElement(
                        'span',
                        { className: props.pickerInputClass, disabled: props.disabled },
                        _react2["default"].createElement('input', { disabled: props.disabled, readOnly: true, value: start && start.format(props.format) || '', placeholder: startPlaceholder, className: prefixCls + '-range-picker-input' }),
                        _react2["default"].createElement(
                            'span',
                            { className: prefixCls + '-range-picker-separator' },
                            ' ~ '
                        ),
                        _react2["default"].createElement('input', { disabled: props.disabled, readOnly: true, value: end && end.format(props.format) || '', placeholder: endPlaceholder, className: prefixCls + '-range-picker-input' }),
                        clearIcon,
                        _react2["default"].createElement('span', { className: prefixCls + '-picker-icon' })
                    );
                }
            )
        );
    };

    return RangePicker;
}(_react2["default"].Component);

exports["default"] = RangePicker;

RangePicker.defaultProps = {
    prefixCls: 'ant-calendar'
};
module.exports = exports['default'];