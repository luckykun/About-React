'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var LazyRenderBox = _react2["default"].createClass({
    displayName: 'LazyRenderBox',
    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
        return !!nextProps.hiddenClassName || !!nextProps.visible;
    },
    render: function render() {
        var className = this.props.className;
        if (!!this.props.hiddenClassName && !this.props.visible) {
            className += ' ' + this.props.hiddenClassName;
        }
        var props = (0, _objectAssign2["default"])({}, this.props);
        delete props.hiddenClassName;
        delete props.visible;
        props.className = className;
        return _react2["default"].createElement("div", __assign({}, props));
    }
});
exports["default"] = LazyRenderBox;
module.exports = exports['default'];