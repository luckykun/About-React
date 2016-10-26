'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.Dragger = Dragger;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcUpload = require('rc-upload');

var _rcUpload2 = _interopRequireDefault(_rcUpload);

var _uploadList = require('./uploadList');

var _uploadList2 = _interopRequireDefault(_uploadList);

var _getFileItem = require('./getFileItem');

var _getFileItem2 = _interopRequireDefault(_getFileItem);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}
function T() {
    return true;
}
// Fix IE file.status problem
// via coping a new Object
function fileToObject(file) {
    return {
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        name: file.filename || file.name,
        size: file.size,
        type: file.type,
        uid: file.uid,
        response: file.response,
        error: file.error,
        percent: 0,
        originFileObj: file,
        status: null
    };
}
/**
 * 生成Progress percent: 0.1 -> 0.98
 *   - for ie
 */
function genPercentAdd() {
    var k = 0.1;
    var i = 0.01;
    var end = 0.98;
    return function (s) {
        var start = s;
        if (start >= end) {
            return start;
        }
        start += k;
        k = k - i;
        if (k < 0.001) {
            k = 0.001;
        }
        return start * 100;
    };
}
function Dragger(props) {
    return _react2["default"].createElement(Upload, (0, _extends3["default"])({}, props, { type: 'drag', style: { height: props.height } }));
}

var Upload = function (_React$Component) {
    (0, _inherits3["default"])(Upload, _React$Component);

    function Upload(props) {
        (0, _classCallCheck3["default"])(this, Upload);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onStart = function (file) {
            var targetItem = void 0;
            var nextFileList = _this.state.fileList.concat();
            if (file.length > 0) {
                targetItem = file.map(function (f) {
                    var fileObject = fileToObject(f);
                    fileObject.status = 'uploading';
                    return fileObject;
                });
                nextFileList = nextFileList.concat(targetItem);
            } else {
                targetItem = fileToObject(file);
                targetItem.status = 'uploading';
                nextFileList.push(targetItem);
            }
            _this.onChange({
                file: targetItem,
                fileList: nextFileList
            });
            // fix ie progress
            if (!window.FormData) {
                _this.autoUpdateProgress(0, targetItem);
            }
        };
        _this.onSuccess = function (response, file) {
            _this.clearProgressTimer();
            try {
                if (typeof response === 'string') {
                    response = JSON.parse(response);
                }
            } catch (e) {}
            var fileList = _this.state.fileList;
            var targetItem = (0, _getFileItem2["default"])(file, fileList);
            // removed
            if (!targetItem) {
                return;
            }
            targetItem.status = 'done';
            targetItem.response = response;
            _this.onChange({
                file: targetItem,
                fileList: fileList
            });
        };
        _this.onProgress = function (e, file) {
            var fileList = _this.state.fileList;
            var targetItem = (0, _getFileItem2["default"])(file, fileList);
            // removed
            if (!targetItem) {
                return;
            }
            targetItem.percent = e.percent;
            _this.onChange({
                event: e,
                file: targetItem,
                fileList: _this.state.fileList
            });
        };
        _this.onError = function (error, response, file) {
            _this.clearProgressTimer();
            var fileList = _this.state.fileList;
            var targetItem = (0, _getFileItem2["default"])(file, fileList);
            // removed
            if (!targetItem) {
                return;
            }
            targetItem.error = error;
            targetItem.response = response;
            targetItem.status = 'error';
            _this.handleRemove(targetItem);
        };
        _this.handleManualRemove = function (file) {
            _this.refs.upload.abort(file);
            file.status = 'removed'; // eslint-disable-line
            _this.handleRemove(file);
        };
        _this.onChange = function (info) {
            if (!('fileList' in _this.props)) {
                _this.setState({ fileList: info.fileList });
            }
            _this.props.onChange(info);
        };
        _this.onFileDrop = function (e) {
            _this.setState({
                dragState: e.type
            });
        };
        _this.state = {
            fileList: _this.props.fileList || _this.props.defaultFileList || [],
            dragState: 'drop'
        };
        return _this;
    }

    Upload.prototype.autoUpdateProgress = function autoUpdateProgress(percent, file) {
        var _this2 = this;

        var getPercent = genPercentAdd();
        var curPercent = 0;
        this.progressTimer = setInterval(function () {
            curPercent = getPercent(curPercent);
            _this2.onProgress({
                percent: curPercent
            }, file);
        }, 200);
    };

    Upload.prototype.removeFile = function removeFile(file) {
        var fileList = this.state.fileList;
        var targetItem = (0, _getFileItem2["default"])(file, fileList);
        var index = fileList.indexOf(targetItem);
        if (index !== -1) {
            fileList.splice(index, 1);
            return fileList;
        }
        return null;
    };

    Upload.prototype.handleRemove = function handleRemove(file) {
        this.props.onRemove(file);
        var fileList = this.removeFile(file);
        if (fileList) {
            this.onChange({
                file: file,
                fileList: fileList
            });
        }
    };

    Upload.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('fileList' in nextProps) {
            this.setState({
                fileList: nextProps.fileList || []
            });
        }
    };

    Upload.prototype.clearProgressTimer = function clearProgressTimer() {
        clearInterval(this.progressTimer);
    };

    Upload.prototype.render = function render() {
        var _classNames2;

        var _props = this.props;
        var prefixCls = _props.prefixCls;
        var showUploadList = _props.showUploadList;
        var listType = _props.listType;
        var onPreview = _props.onPreview;
        var type = _props.type;
        var disabled = _props.disabled;
        var children = _props.children;
        var className = _props.className;

        var rcUploadProps = (0, _objectAssign2["default"])({}, this.props, {
            onStart: this.onStart,
            onError: this.onError,
            onProgress: this.onProgress,
            onSuccess: this.onSuccess
        });
        var uploadList = showUploadList ? _react2["default"].createElement(_uploadList2["default"], { listType: listType, items: this.state.fileList, onPreview: onPreview, onRemove: this.handleManualRemove }) : null;
        if (type === 'drag') {
            var _classNames;

            var dragCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-drag', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-drag-uploading', this.state.fileList.some(function (file) {
                return file.status === 'uploading';
            })), (0, _defineProperty3["default"])(_classNames, prefixCls + '-drag-hover', this.state.dragState === 'dragover'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-disabled', disabled), _classNames));
            return _react2["default"].createElement(
                'span',
                { className: className },
                _react2["default"].createElement(
                    'div',
                    { className: dragCls, onDrop: this.onFileDrop, onDragOver: this.onFileDrop, onDragLeave: this.onFileDrop },
                    _react2["default"].createElement(
                        _rcUpload2["default"],
                        (0, _extends3["default"])({}, rcUploadProps, { ref: 'upload', className: prefixCls + '-btn' }),
                        _react2["default"].createElement(
                            'div',
                            { className: prefixCls + '-drag-container' },
                            children
                        )
                    )
                ),
                uploadList
            );
        }
        var uploadButtonCls = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls, true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-select', true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-select-' + listType, true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-disabled', disabled), _classNames2));
        var uploadButton = children ? _react2["default"].createElement(
            'div',
            { className: uploadButtonCls },
            _react2["default"].createElement(_rcUpload2["default"], (0, _extends3["default"])({}, rcUploadProps, { ref: 'upload' }))
        ) : null;
        if (listType === 'picture-card') {
            return _react2["default"].createElement(
                'span',
                { className: className },
                uploadList,
                uploadButton
            );
        }
        return _react2["default"].createElement(
            'span',
            { className: className },
            uploadButton,
            uploadList
        );
    };

    return Upload;
}(_react2["default"].Component);

exports["default"] = Upload;

Upload.Dragger = Dragger;
Upload.defaultProps = {
    prefixCls: 'ant-upload',
    type: 'select',
    multiple: false,
    action: '',
    data: {},
    accept: '',
    onChange: noop,
    beforeUpload: T,
    showUploadList: true,
    listType: 'text',
    className: '',
    disabled: false,
    onRemove: function onRemove() {},
    onPreview: function onPreview() {}
};