'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = function (props) {
    var _classNames;

    var type = props.type;
    var _props$className = props.className;
    var className = _props$className === undefined ? '' : _props$className;
    var spin = props.spin;

    var classString = (0, _classnames2["default"])((_classNames = {
        anticon: true,
        'anticon-spin': !!spin || type === 'loading'
    }, (0, _defineProperty3["default"])(_classNames, 'anticon-' + type, true), (0, _defineProperty3["default"])(_classNames, className, true), _classNames));
    return React.createElement('i', (0, _extends3["default"])({}, (0, _omit2["default"])(props, ['type', 'spin']), { className: classString }));
};

module.exports = exports['default'];