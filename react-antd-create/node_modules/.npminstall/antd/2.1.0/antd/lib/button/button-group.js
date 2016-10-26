'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports["default"] = ButtonGroup;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ButtonGroup(props) {
    var _classNames;

    var _splitObject = (0, _splitObject4["default"])(props, ['prefixCls', 'size', 'className']);

    var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

    var _splitObject2$ = _splitObject2[0];
    var _splitObject2$$prefix = _splitObject2$.prefixCls;
    var prefixCls = _splitObject2$$prefix === undefined ? 'ant-btn-group' : _splitObject2$$prefix;
    var size = _splitObject2$.size;
    var className = _splitObject2$.className;
    var others = _splitObject2[1];
    // large => lg
    // small => sm

    var sizeCls = {
        large: 'lg',
        small: 'sm'
    }[size] || '';
    var classes = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + sizeCls, sizeCls), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
    return _react2["default"].createElement('div', (0, _extends3["default"])({}, others, { className: classes }));
}
module.exports = exports['default'];