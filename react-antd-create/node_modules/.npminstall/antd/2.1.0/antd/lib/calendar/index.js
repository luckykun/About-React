'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _FullCalendar = require('rc-calendar/lib/FullCalendar');

var _FullCalendar2 = _interopRequireDefault(_FullCalendar);

var _Constants = require('./Constants');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _getLocale = require('../_util/getLocale');

var _getLocale2 = _interopRequireDefault(_getLocale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {
    return null;
}
function zerofixed(v) {
    if (v < 10) {
        return '0' + v;
    }
    return '' + v;
}

var Calendar = function (_React$Component) {
    (0, _inherits3["default"])(Calendar, _React$Component);

    function Calendar(props) {
        (0, _classCallCheck3["default"])(this, Calendar);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.monthCellRender = function (value) {
            var prefixCls = _this.props.prefixCls;
            return _react2["default"].createElement(
                'div',
                { className: prefixCls + '-month' },
                _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-value' },
                    value.localeData().monthsShort(value)
                ),
                _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-content' },
                    _this.props.monthCellRender(value)
                )
            );
        };
        _this.dateCellRender = function (value) {
            var prefixCls = _this.props.prefixCls;
            return _react2["default"].createElement(
                'div',
                { className: prefixCls + '-date' },
                _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-value' },
                    zerofixed(value.date())
                ),
                _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-content' },
                    _this.props.dateCellRender(value)
                )
            );
        };
        _this.setValue = function (value) {
            if (!('value' in _this.props) && _this.state.value !== value) {
                _this.setState({ value: value });
            }
            _this.props.onPanelChange(value, _this.state.mode);
        };
        _this.setType = function (type) {
            var mode = type === 'date' ? 'month' : 'year';
            if (_this.state.mode !== mode) {
                _this.setState({ mode: mode });
                _this.props.onPanelChange(_this.state.value, mode);
            }
        };
        _this.state = {
            value: props.value || props.defaultValue || (0, _moment2["default"])(),
            mode: props.mode
        };
        return _this;
    }

    Calendar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value
            });
        }
    };

    Calendar.prototype.render = function render() {
        var props = this.props;
        var _state = this.state;
        var value = _state.value;
        var mode = _state.mode;
        var prefixCls = props.prefixCls;
        var style = props.style;
        var className = props.className;
        var fullscreen = props.fullscreen;

        var type = mode === 'year' ? 'month' : 'date';
        var locale = (0, _getLocale2["default"])(this.props, this.context, 'Calendar', function () {
            return require('./locale/zh_CN');
        });
        var cls = className || '';
        if (fullscreen) {
            cls += ' ' + prefixCls + '-fullscreen';
        }
        return _react2["default"].createElement(
            'div',
            { className: cls, style: style },
            _react2["default"].createElement(_Header2["default"], { fullscreen: fullscreen, type: type, value: value, locale: locale.lang, prefixCls: prefixCls, onTypeChange: this.setType, onValueChange: this.setValue }),
            _react2["default"].createElement(_FullCalendar2["default"], (0, _extends3["default"])({}, props, { Select: noop, locale: locale.lang, type: type, prefixCls: prefixCls, showHeader: false, value: value, monthCellRender: this.monthCellRender, dateCellRender: this.dateCellRender }))
        );
    };

    return Calendar;
}(_react2["default"].Component);

exports["default"] = Calendar;

Calendar.defaultProps = {
    monthCellRender: noop,
    dateCellRender: noop,
    locale: {},
    fullscreen: true,
    prefixCls: _Constants.PREFIX_CLS,
    onPanelChange: noop,
    mode: 'month'
};
Calendar.propTypes = {
    monthCellRender: _react.PropTypes.func,
    dateCellRender: _react.PropTypes.func,
    fullscreen: _react.PropTypes.bool,
    locale: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object,
    onPanelChange: _react.PropTypes.func,
    value: _react.PropTypes.object
};
Calendar.contextTypes = {
    antLocale: _react.PropTypes.object
};
module.exports = exports['default'];