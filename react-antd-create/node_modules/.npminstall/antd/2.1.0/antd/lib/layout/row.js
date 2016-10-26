'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Row = function (_React$Component) {
    (0, _inherits3["default"])(Row, _React$Component);

    function Row() {
        (0, _classCallCheck3["default"])(this, Row);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Row.prototype.render = function render() {
        var _classNames;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['type', 'justify', 'align', 'className', 'gutter', 'style', 'children', 'prefixCls']);

        var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var type = _splitObject2$.type;
        var justify = _splitObject2$.justify;
        var align = _splitObject2$.align;
        var className = _splitObject2$.className;
        var gutter = _splitObject2$.gutter;
        var style = _splitObject2$.style;
        var children = _splitObject2$.children;
        var prefixCls = _splitObject2$.prefixCls;
        var others = _splitObject2[1];

        var classes = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, !type), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + type, type), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + type + '-' + justify, justify), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + type + '-' + align, align), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
        var rowStyle = gutter > 0 ? (0, _objectAssign2["default"])({}, {
            marginLeft: gutter / -2,
            marginRight: gutter / -2
        }, style) : style;
        var cols = _react.Children.map(children, function (col) {
            if (!col) {
                return null;
            }
            if (col.props) {
                return (0, _react.cloneElement)(col, {
                    style: gutter > 0 ? (0, _objectAssign2["default"])({}, {
                        paddingLeft: gutter / 2,
                        paddingRight: gutter / 2
                    }, col.props.style) : col.props.style
                });
            }
            return col;
        });
        return _react2["default"].createElement(
            'div',
            (0, _extends3["default"])({}, others, { className: classes, style: rowStyle }),
            cols
        );
    };

    return Row;
}(_react2["default"].Component);

exports["default"] = Row;

Row.defaultProps = {
    gutter: 0,
    prefixCls: 'ant-row'
};
Row.propTypes = {
    type: _react2["default"].PropTypes.string,
    align: _react2["default"].PropTypes.string,
    justify: _react2["default"].PropTypes.string,
    className: _react2["default"].PropTypes.string,
    children: _react2["default"].PropTypes.node,
    gutter: _react2["default"].PropTypes.number,
    prefixCls: _react2["default"].PropTypes.string
};
module.exports = exports['default'];