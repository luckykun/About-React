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

var _rcPagination = require('rc-pagination');

var _rcPagination2 = _interopRequireDefault(_rcPagination);

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _MiniSelect = require('./MiniSelect');

var _MiniSelect2 = _interopRequireDefault(_MiniSelect);

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Pagination = function (_React$Component) {
    (0, _inherits3["default"])(Pagination, _React$Component);

    function Pagination() {
        (0, _classCallCheck3["default"])(this, Pagination);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Pagination.prototype.render = function render() {
        var className = this.props.className;
        var selectComponentClass = _select2["default"];
        var locale = void 0;
        if (this.context.antLocale && this.context.antLocale.Pagination) {
            locale = this.context.antLocale.Pagination;
        } else {
            locale = this.props.locale;
        }
        if (this.props.size === 'small') {
            className += ' mini';
            selectComponentClass = _MiniSelect2["default"];
        }
        return _react2["default"].createElement(_rcPagination2["default"], (0, _extends3["default"])({ selectComponentClass: selectComponentClass, selectPrefixCls: this.props.selectPrefixCls }, this.props, { locale: locale, className: className }));
    };

    return Pagination;
}(_react2["default"].Component);

exports["default"] = Pagination;

Pagination.defaultProps = {
    locale: _zh_CN2["default"],
    className: '',
    prefixCls: 'ant-pagination',
    selectPrefixCls: 'ant-select'
};
Pagination.contextTypes = {
    antLocale: _react2["default"].PropTypes.object
};
module.exports = exports['default'];