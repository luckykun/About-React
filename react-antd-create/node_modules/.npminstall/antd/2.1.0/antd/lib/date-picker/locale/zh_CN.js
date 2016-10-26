'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _zh_CN = require('rc-calendar/lib/locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _zh_CN3 = require('../../time-picker/locale/zh_CN');

var _zh_CN4 = _interopRequireDefault(_zh_CN3);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/zh-cn');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_moment2["default"].locale('zh-cn');
// 统一合并为完整的 Locale
var locale = {
    lang: (0, _objectAssign2["default"])({
        placeholder: '请选择日期',
        rangePlaceholder: ['开始日期', '结束日期']
    }, _zh_CN2["default"]),
    timePickerLocale: (0, _objectAssign2["default"])({}, _zh_CN4["default"])
};
// should add whitespace between char in Button
locale.lang.ok = '确 定';
exports["default"] = locale;
module.exports = exports['default'];