'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CheckboxGroup = function (_React$Component) {
    (0, _inherits3["default"])(CheckboxGroup, _React$Component);

    function CheckboxGroup(props) {
        (0, _classCallCheck3["default"])(this, CheckboxGroup);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.toggleOption = function (option) {
            var optionIndex = _this.state.value.indexOf(option.value);
            var value = [].concat((0, _toConsumableArray3["default"])(_this.state.value));
            if (optionIndex === -1) {
                value.push(option.value);
            } else {
                value.splice(optionIndex, 1);
            }
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            _this.props.onChange(value);
        };
        _this.state = {
            value: props.value || props.defaultValue || []
        };
        return _this;
    }

    CheckboxGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value || []
            });
        }
    };

    CheckboxGroup.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _reactAddonsPureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
    };

    CheckboxGroup.prototype.getOptions = function getOptions() {
        var options = this.props.options;
        // https://github.com/Microsoft/TypeScript/issues/7960

        return options.map(function (option) {
            if (typeof option === 'string') {
                return {
                    label: option,
                    value: option
                };
            }
            return option;
        });
    };

    CheckboxGroup.prototype.render = function render() {
        var _this2 = this;

        var prefixCls = this.props.prefixCls;

        var options = this.getOptions();
        return _react2["default"].createElement(
            'div',
            { className: prefixCls },
            options.map(function (option) {
                return _react2["default"].createElement(
                    _index2["default"],
                    { disabled: 'disabled' in option ? option.disabled : _this2.props.disabled, checked: _this2.state.value.indexOf(option.value) !== -1, onChange: function onChange() {
                            return _this2.toggleOption(option);
                        }, className: prefixCls + '-item', key: option.value },
                    option.label
                );
            })
        );
    };

    return CheckboxGroup;
}(_react2["default"].Component);

exports["default"] = CheckboxGroup;

CheckboxGroup.defaultProps = {
    options: [],
    onChange: function onChange() {},

    prefixCls: 'ant-checkbox-group'
};
CheckboxGroup.propTypes = {
    defaultValue: _react2["default"].PropTypes.array,
    value: _react2["default"].PropTypes.array,
    options: _react2["default"].PropTypes.array.isRequired,
    onChange: _react2["default"].PropTypes.func
};
module.exports = exports['default'];