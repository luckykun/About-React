'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _request = require('./request');

var _request2 = _interopRequireDefault(_request);

var _uid = require('./uid');

var _uid2 = _interopRequireDefault(_uid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint react/no-is-mounted:0*/

var AjaxUploader = _react2["default"].createClass({
  displayName: 'AjaxUploader',

  propTypes: {
    component: _react.PropTypes.string,
    style: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    className: _react.PropTypes.string,
    multiple: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    accept: _react.PropTypes.string,
    children: _react.PropTypes.any,
    onStart: _react.PropTypes.func,
    data: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),
    headers: _react.PropTypes.object,
    beforeUpload: _react.PropTypes.func,
    customRequest: _react.PropTypes.func,
    withCredentials: _react.PropTypes.bool
  },

  getInitialState: function getInitialState() {
    this.reqs = {};
    return {
      uid: (0, _uid2["default"])()
    };
  },
  componentWillUnmount: function componentWillUnmount() {
    this.abort();
  },
  onChange: function onChange(e) {
    var files = e.target.files;
    this.uploadFiles(files);
    this.reset();
  },
  onClick: function onClick() {
    var el = this.refs.file;
    if (!el) {
      return;
    }
    el.click();
  },
  onKeyDown: function onKeyDown(e) {
    if (e.key === 'Enter') {
      this.onClick();
    }
  },
  onFileDrop: function onFileDrop(e) {
    if (e.type === 'dragover') {
      e.preventDefault();
      return;
    }

    var files = e.dataTransfer.files;
    this.uploadFiles(files);

    e.preventDefault();
  },
  uploadFiles: function uploadFiles(files) {
    var postFiles = Array.prototype.slice.call(files);
    var len = postFiles.length;
    for (var i = 0; i < len; i++) {
      var file = postFiles[i];
      file.uid = (0, _uid2["default"])();
      this.upload(file);
    }
  },
  upload: function upload(file) {
    var _this = this;

    var props = this.props;

    if (!props.beforeUpload) {
      // always async in case use react state to keep fileList
      return setTimeout(function () {
        return _this.post(file);
      }, 0);
    }

    var before = props.beforeUpload(file);
    if (before && before.then) {
      before.then(function (processedFile) {
        var processedFileType = Object.prototype.toString.call(processedFile);
        if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
          _this.post(processedFile);
        } else {
          _this.post(file);
        }
      });
    } else if (before !== false) {
      setTimeout(function () {
        return _this.post(file);
      }, 0);
    }
  },
  post: function post(file) {
    var _this2 = this;

    if (!this.isMounted()) {
      return;
    }
    var props = this.props;
    var data = props.data;
    var onStart = props.onStart;

    if (typeof data === 'function') {
      data = data(file);
    }
    var uid = file.uid;

    var request = props.customRequest || _request2["default"];
    this.reqs[uid] = request({
      action: props.action,
      filename: props.name,
      file: file,
      data: data,
      headers: props.headers,
      withCredentials: props.withCredentials,
      onProgress: function onProgress(e) {
        props.onProgress(e, file);
      },
      onSuccess: function onSuccess(ret) {
        delete _this2.reqs[uid];
        props.onSuccess(ret, file);
      },
      onError: function onError(err, ret) {
        delete _this2.reqs[uid];
        props.onError(err, ret, file);
      }
    });
    onStart(file);
  },
  reset: function reset() {
    this.setState({
      uid: (0, _uid2["default"])()
    });
  },
  abort: function abort(file) {
    var reqs = this.reqs;

    if (file) {
      var uid = file;
      if (file && file.uid) {
        uid = file.uid;
      }
      if (reqs[uid]) {
        reqs[uid].abort();
        delete reqs[uid];
      }
    } else {
      Object.keys(reqs).forEach(function (uid) {
        reqs[uid].abort();
        delete reqs[uid];
      });
    }
  },
  render: function render() {
    var _classNames;

    var _props = this.props;
    var Tag = _props.component;
    var prefixCls = _props.prefixCls;
    var className = _props.className;
    var disabled = _props.disabled;
    var style = _props.style;
    var multiple = _props.multiple;
    var accept = _props.accept;
    var children = _props.children;

    var cls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-disabled', disabled), (0, _defineProperty3["default"])(_classNames, className, className), _classNames));
    var events = disabled ? {} : {
      onClick: this.onClick,
      onKeyDown: this.onKeyDown,
      onDrop: this.onFileDrop,
      onDragOver: this.onFileDrop,
      tabIndex: '0'
    };
    return _react2["default"].createElement(
      Tag,
      (0, _extends3["default"])({}, events, {
        className: cls,
        role: 'button',
        style: style
      }),
      _react2["default"].createElement('input', {
        type: 'file',
        ref: 'file',
        key: this.state.uid,
        style: { display: 'none' },
        accept: accept,
        multiple: multiple,
        onChange: this.onChange
      }),
      children
    );
  }
});

exports["default"] = AjaxUploader;
module.exports = exports['default'];