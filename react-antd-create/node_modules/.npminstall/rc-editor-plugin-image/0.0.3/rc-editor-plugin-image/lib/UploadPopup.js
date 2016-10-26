'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UploadPopup;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcDialog = require('rc-dialog');

var _rcDialog2 = _interopRequireDefault(_rcDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function UploadPopup(props) {
  return _react2["default"].createElement(
    _rcDialog2["default"],
    { title: '上传图片', visible: props.visible, onClose: props.onClose },
    _react2["default"].createElement('input', { type: 'text' })
  );
}
module.exports = exports['default'];