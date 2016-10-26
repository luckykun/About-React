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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = function (props) {
    var _classNames;

    var _splitObject = (0, _splitObject4["default"])(props, ['prefixCls', 'className', 'children', 'extra', 'bodyStyle', 'title', 'loading', 'bordered']);

    var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

    var _splitObject2$ = _splitObject2[0];
    var _splitObject2$$prefix = _splitObject2$.prefixCls;
    var prefixCls = _splitObject2$$prefix === undefined ? 'ant-card' : _splitObject2$$prefix;
    var className = _splitObject2$.className;
    var extra = _splitObject2$.extra;
    var bodyStyle = _splitObject2$.bodyStyle;
    var title = _splitObject2$.title;
    var loading = _splitObject2$.loading;
    var _splitObject2$$border = _splitObject2$.bordered;
    var bordered = _splitObject2$$border === undefined ? true : _splitObject2$$border;
    var others = _splitObject2[1];

    var children = props.children;
    var classString = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, className, !!className), (0, _defineProperty3["default"])(_classNames, prefixCls + '-loading', loading), (0, _defineProperty3["default"])(_classNames, prefixCls + '-bordered', bordered), _classNames));
    if (loading) {
        children = _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement(
                'p',
                null,
                '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588'
            ),
            _react2["default"].createElement(
                'p',
                null,
                '\u2588\u2588\u2588\u2588\u2588\u2588\u3000\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588'
            ),
            _react2["default"].createElement(
                'p',
                null,
                '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u3000\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588'
            ),
            _react2["default"].createElement(
                'p',
                null,
                '\u2588\u2588\u2588\u2588\u2588\u3000\u2588\u2588\u2588\u2588\u2588\u2588\u3000\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588'
            ),
            _react2["default"].createElement(
                'p',
                null,
                '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u3000\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u3000\u2588\u2588\u2588'
            )
        );
    }
    var head = void 0;
    if (!title) {
        head = null;
    } else {
        head = typeof title === 'string' ? _react2["default"].createElement(
            'div',
            { className: prefixCls + '-head' },
            _react2["default"].createElement(
                'h3',
                { className: prefixCls + '-head-title' },
                title
            )
        ) : _react2["default"].createElement(
            'div',
            { className: prefixCls + '-head' },
            _react2["default"].createElement(
                'div',
                { className: prefixCls + '-head-title' },
                title
            )
        );
    }
    return _react2["default"].createElement(
        'div',
        (0, _extends3["default"])({}, others, { className: classString }),
        head,
        extra ? _react2["default"].createElement(
            'div',
            { className: prefixCls + '-extra' },
            extra
        ) : null,
        _react2["default"].createElement(
            'div',
            { className: prefixCls + '-body', style: bodyStyle },
            children
        )
    );
};

module.exports = exports['default'];