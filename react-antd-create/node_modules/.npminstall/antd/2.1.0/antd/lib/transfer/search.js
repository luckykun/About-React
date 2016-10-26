'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

var Search = function (_React$Component) {
    (0, _inherits3["default"])(Search, _React$Component);

    function Search() {
        (0, _classCallCheck3["default"])(this, Search);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

        _this.handleChange = function (e) {
            _this.props.onChange(e);
        };
        _this.handleClear = function (e) {
            e.preventDefault();
            _this.props.handleClear(e);
        };
        return _this;
    }

    Search.prototype.render = function render() {
        var _props = this.props;
        var placeholder = _props.placeholder;
        var value = _props.value;
        var prefixCls = _props.prefixCls;

        return _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement(_input2["default"], { placeholder: placeholder, className: prefixCls, value: value, ref: 'input', onChange: this.handleChange }),
            value && value.length > 0 ? _react2["default"].createElement(
                'a',
                { href: '#', className: prefixCls + '-action', onClick: this.handleClear },
                _react2["default"].createElement(_icon2["default"], { type: 'cross-circle' })
            ) : _react2["default"].createElement(
                'span',
                { className: prefixCls + '-action' },
                _react2["default"].createElement(_icon2["default"], { type: 'search' })
            )
        );
    };

    return Search;
}(_react2["default"].Component);

exports["default"] = Search;

Search.defaultProps = {
    placeholder: '',
    onChange: noop,
    handleClear: noop
};
module.exports = exports['default'];