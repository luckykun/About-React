'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stringOrNumber = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]);
var objectOrNumber = _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.number]);
var Col = function Col(props) {
    var _assign2;

    var _splitObject = (0, _splitObject4["default"])(props, ['span', 'order', 'offset', 'push', 'pull', 'className', 'children', 'prefixCls']);

    var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

    var _splitObject2$ = _splitObject2[0];
    var span = _splitObject2$.span;
    var order = _splitObject2$.order;
    var offset = _splitObject2$.offset;
    var push = _splitObject2$.push;
    var pull = _splitObject2$.pull;
    var className = _splitObject2$.className;
    var children = _splitObject2$.children;
    var _splitObject2$$prefix = _splitObject2$.prefixCls;
    var prefixCls = _splitObject2$$prefix === undefined ? 'ant-col' : _splitObject2$$prefix;
    var others = _splitObject2[1];

    var sizeClassObj = {};
    ['xs', 'sm', 'md', 'lg'].forEach(function (size) {
        var _assign;

        var sizeProps = {};
        if (typeof props[size] === 'number') {
            sizeProps.span = props[size];
        } else if ((0, _typeof3["default"])(props[size]) === 'object') {
            sizeProps = props[size] || {};
        }
        delete others[size];
        sizeClassObj = (0, _objectAssign2["default"])({}, sizeClassObj, (_assign = {}, (0, _defineProperty3["default"])(_assign, prefixCls + '-' + size + '-' + sizeProps.span, sizeProps.span !== undefined), (0, _defineProperty3["default"])(_assign, prefixCls + '-' + size + '-order-' + sizeProps.order, sizeProps.order), (0, _defineProperty3["default"])(_assign, prefixCls + '-' + size + '-offset-' + sizeProps.offset, sizeProps.offset), (0, _defineProperty3["default"])(_assign, prefixCls + '-' + size + '-push-' + sizeProps.push, sizeProps.push), (0, _defineProperty3["default"])(_assign, prefixCls + '-' + size + '-pull-' + sizeProps.pull, sizeProps.pull), _assign));
    });
    var classes = (0, _classnames2["default"])((0, _objectAssign2["default"])({}, (_assign2 = {}, (0, _defineProperty3["default"])(_assign2, prefixCls + '-' + span, span !== undefined), (0, _defineProperty3["default"])(_assign2, prefixCls + '-order-' + order, order), (0, _defineProperty3["default"])(_assign2, prefixCls + '-offset-' + offset, offset), (0, _defineProperty3["default"])(_assign2, prefixCls + '-push-' + push, push), (0, _defineProperty3["default"])(_assign2, prefixCls + '-pull-' + pull, pull), (0, _defineProperty3["default"])(_assign2, className, !!className), _assign2), sizeClassObj));
    return _react2["default"].createElement(
        'div',
        (0, _extends3["default"])({}, others, { className: classes }),
        children
    );
};
Col.propTypes = {
    span: stringOrNumber,
    order: stringOrNumber,
    offset: stringOrNumber,
    push: stringOrNumber,
    pull: stringOrNumber,
    className: _react.PropTypes.string,
    children: _react.PropTypes.node,
    xs: objectOrNumber,
    sm: objectOrNumber,
    md: objectOrNumber,
    lg: objectOrNumber
};
exports["default"] = Col;
module.exports = exports['default'];