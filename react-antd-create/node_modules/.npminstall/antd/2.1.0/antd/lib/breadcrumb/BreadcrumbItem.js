'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BreadcrumbItem = function (_React$Component) {
    (0, _inherits3["default"])(BreadcrumbItem, _React$Component);

    function BreadcrumbItem() {
        (0, _classCallCheck3["default"])(this, BreadcrumbItem);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    BreadcrumbItem.prototype.render = function render() {
        var _splitObject = (0, _splitObject4["default"])(this.props, ['prefixCls', 'separator', 'children']);

        var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var prefixCls = _splitObject2$.prefixCls;
        var separator = _splitObject2$.separator;
        var children = _splitObject2$.children;
        var restProps = _splitObject2[1];

        var link = void 0;
        if ('href' in this.props) {
            link = _react2["default"].createElement(
                'a',
                (0, _extends3["default"])({ className: prefixCls + '-link' }, restProps),
                children
            );
        } else {
            link = _react2["default"].createElement(
                'span',
                (0, _extends3["default"])({ className: prefixCls + '-link' }, restProps),
                children
            );
        }
        return _react2["default"].createElement(
            'span',
            null,
            link,
            _react2["default"].createElement(
                'span',
                { className: prefixCls + '-separator' },
                separator
            )
        );
    };

    return BreadcrumbItem;
}(_react2["default"].Component);

exports["default"] = BreadcrumbItem;

BreadcrumbItem.defaultProps = {
    prefixCls: 'ant-breadcrumb',
    separator: '/'
};
BreadcrumbItem.propTypes = {
    prefixCls: _react2["default"].PropTypes.string,
    separator: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.element]),
    href: _react2["default"].PropTypes.string
};
module.exports = exports['default'];