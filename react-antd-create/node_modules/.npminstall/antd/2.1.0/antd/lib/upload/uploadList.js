'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _progress = require('../progress');

var _progress2 = _interopRequireDefault(_progress);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
var previewFile = function previewFile(file, callback) {
    var reader = new FileReader();
    reader.onloadend = function () {
        return callback(reader.result);
    };
    reader.readAsDataURL(file);
};

var UploadList = function (_React$Component) {
    (0, _inherits3["default"])(UploadList, _React$Component);

    function UploadList() {
        (0, _classCallCheck3["default"])(this, UploadList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

        _this.handleClose = function (file) {
            _this.props.onRemove(file);
        };
        _this.handlePreview = function (file, e) {
            e.preventDefault();
            return _this.props.onPreview(file);
        };
        return _this;
    }

    UploadList.prototype.componentDidUpdate = function componentDidUpdate() {
        var _this2 = this;

        if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
            return;
        }
        this.props.items.forEach(function (file) {
            if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File) || file.thumbUrl !== undefined) {
                return;
            }
            /*eslint-disable */
            file.thumbUrl = '';
            /*eslint-enable */
            previewFile(file.originFileObj, function (previewDataUrl) {
                /*eslint-disable */
                file.thumbUrl = previewDataUrl;
                /*eslint-enable */
                _this2.forceUpdate();
            });
        });
    };

    UploadList.prototype.render = function render() {
        var _this3 = this,
            _classNames2;

        var _props = this.props;
        var prefixCls = _props.prefixCls;
        var items = _props.items;
        var listType = _props.listType;

        var list = items.map(function (file) {
            var _classNames;

            var progress = void 0;
            var icon = _react2["default"].createElement(_icon2["default"], { type: 'paper-clip' });
            if (listType === 'picture' || listType === 'picture-card') {
                if (file.status === 'uploading' || !file.thumbUrl && !file.url) {
                    if (listType === 'picture-card') {
                        icon = _react2["default"].createElement(
                            'div',
                            { className: prefixCls + '-list-item-uploading-text' },
                            '\u6587\u4EF6\u4E0A\u4F20\u4E2D'
                        );
                    } else {
                        icon = _react2["default"].createElement(_icon2["default"], { className: prefixCls + '-list-item-thumbnail', type: 'picture' });
                    }
                } else {
                    icon = _react2["default"].createElement(
                        'a',
                        { className: prefixCls + '-list-item-thumbnail', onClick: function onClick(e) {
                                return _this3.handlePreview(file, e);
                            }, href: file.url, target: '_blank', rel: 'noopener noreferrer' },
                        _react2["default"].createElement('img', { src: file.thumbUrl || file.url, alt: file.name })
                    );
                }
            }
            if (file.status === 'uploading') {
                progress = _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-list-item-progress' },
                    _react2["default"].createElement(_progress2["default"], (0, _extends3["default"])({ type: 'line' }, _this3.props.progressAttr, { percent: file.percent }))
                );
            }
            var infoUploadingClass = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-list-item', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-list-item-' + file.status, true), _classNames));
            return _react2["default"].createElement(
                'div',
                { className: infoUploadingClass, key: file.uid },
                _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-list-item-info' },
                    icon,
                    file.url ? _react2["default"].createElement(
                        'a',
                        { href: file.url, target: '_blank', rel: 'noopener noreferrer', className: prefixCls + '-list-item-name', onClick: function onClick(e) {
                                return _this3.handlePreview(file, e);
                            } },
                        file.name
                    ) : _react2["default"].createElement(
                        'span',
                        { className: prefixCls + '-list-item-name', onClick: function onClick(e) {
                                return _this3.handlePreview(file, e);
                            } },
                        file.name
                    ),
                    listType === 'picture-card' && file.status !== 'uploading' ? _react2["default"].createElement(
                        'span',
                        null,
                        _react2["default"].createElement(
                            'a',
                            { href: file.url, target: '_blank', rel: 'noopener noreferrer', style: { pointerEvents: file.url ? '' : 'none' }, onClick: function onClick(e) {
                                    return _this3.handlePreview(file, e);
                                } },
                            _react2["default"].createElement(_icon2["default"], { type: 'eye-o' })
                        ),
                        _react2["default"].createElement(_icon2["default"], { type: 'delete', onClick: function onClick() {
                                return _this3.handleClose(file);
                            } })
                    ) : _react2["default"].createElement(_icon2["default"], { type: 'cross', onClick: function onClick() {
                            return _this3.handleClose(file);
                        } })
                ),
                progress
            );
        });
        var listClassNames = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-list', true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-list-' + listType, true), _classNames2));
        return _react2["default"].createElement(
            _rcAnimate2["default"],
            { transitionName: prefixCls + '-margin-top', component: 'div', className: listClassNames },
            list
        );
    };

    return UploadList;
}(_react2["default"].Component);

exports["default"] = UploadList;

UploadList.defaultProps = {
    listType: 'text',
    items: [],
    progressAttr: {
        strokeWidth: 3,
        showInfo: false
    },
    prefixCls: 'ant-upload'
};
module.exports = exports['default'];