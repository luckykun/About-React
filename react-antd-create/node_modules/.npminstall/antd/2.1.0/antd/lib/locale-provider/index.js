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

var _locale = require('../modal/locale');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LocaleProvider = function (_React$Component) {
    (0, _inherits3["default"])(LocaleProvider, _React$Component);

    function LocaleProvider() {
        (0, _classCallCheck3["default"])(this, LocaleProvider);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    LocaleProvider.prototype.getChildContext = function getChildContext() {
        return {
            antLocale: this.props.locale
        };
    };

    LocaleProvider.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate();
    };

    LocaleProvider.prototype.componentDidUpdate = function componentDidUpdate() {
        var locale = this.props.locale;

        (0, _locale.changeConfirmLocale)(locale && locale.Modal);
    };

    LocaleProvider.prototype.componentWillUnMount = function componentWillUnMount() {
        (0, _locale.changeConfirmLocale)();
    };

    LocaleProvider.prototype.render = function render() {
        return _react2["default"].Children.only(this.props.children);
    };

    return LocaleProvider;
}(_react2["default"].Component);

exports["default"] = LocaleProvider;

LocaleProvider.propTypes = {
    locale: _react2["default"].PropTypes.object
};
LocaleProvider.childContextTypes = {
    antLocale: _react2["default"].PropTypes.object
};
module.exports = exports['default'];