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

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _dropdown = require('./dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ButtonGroup = _button2["default"].Group;

var DropdownButton = function (_React$Component) {
    (0, _inherits3["default"])(DropdownButton, _React$Component);

    function DropdownButton() {
        (0, _classCallCheck3["default"])(this, DropdownButton);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    DropdownButton.prototype.render = function render() {
        var _classNames;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['type', 'overlay', 'trigger', 'align', 'children', 'className', 'onClick', 'prefixCls', 'disabled']);

        var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var type = _splitObject2$.type;
        var overlay = _splitObject2$.overlay;
        var trigger = _splitObject2$.trigger;
        var align = _splitObject2$.align;
        var children = _splitObject2$.children;
        var className = _splitObject2$.className;
        var onClick = _splitObject2$.onClick;
        var prefixCls = _splitObject2$.prefixCls;
        var disabled = _splitObject2$.disabled;
        var restProps = _splitObject2[1];

        var cls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, className, !!className), _classNames));
        return _react2["default"].createElement(
            ButtonGroup,
            (0, _extends3["default"])({}, restProps, { className: cls }),
            _react2["default"].createElement(
                _button2["default"],
                { type: type, onClick: onClick, disabled: disabled },
                children
            ),
            _react2["default"].createElement(
                _dropdown2["default"],
                { align: align, overlay: overlay, trigger: trigger },
                _react2["default"].createElement(
                    _button2["default"],
                    { type: type, disabled: disabled },
                    _react2["default"].createElement(_icon2["default"], { type: 'down' })
                )
            )
        );
    };

    return DropdownButton;
}(_react2["default"].Component);

exports["default"] = DropdownButton;

DropdownButton.defaultProps = {
    align: {
        points: ['tr', 'br'],
        overlay: {
            adjustX: 1,
            adjustY: 1
        },
        offset: [0, 4],
        targetOffset: [0, 0]
    },
    type: 'default',
    prefixCls: 'ant-dropdown-button'
};
module.exports = exports['default'];