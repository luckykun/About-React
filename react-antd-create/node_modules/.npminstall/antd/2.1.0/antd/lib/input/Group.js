'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Group = function Group(props) {
    var _classNames;

    var className = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, props.prefixCls, true), (0, _defineProperty3["default"])(_classNames, props.prefixCls + '-lg', props.size === 'large'), (0, _defineProperty3["default"])(_classNames, props.prefixCls + '-sm', props.size === 'small'), (0, _defineProperty3["default"])(_classNames, props.className, !!props.className), _classNames));
    return _react2["default"].createElement(
        'span',
        { className: className, style: props.style },
        props.children
    );
};
Group.propTypes = {
    children: _react2["default"].PropTypes.any
};
Group.defaultProps = {
    prefixCls: 'ant-input-group'
};
exports["default"] = Group;
module.exports = exports['default'];