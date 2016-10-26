'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getLocale;

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getLocale(props, context, component, getDefaultLocale) {
    var locale = null;
    if (context && context.antLocale && context.antLocale[component]) {
        locale = context.antLocale[component];
    } else {
        locale = getDefaultLocale();
    }
    // 统一合并为完整的 Locale
    var result = (0, _objectAssign2["default"])({}, locale, props.locale);
    result.lang = (0, _objectAssign2["default"])({}, locale.lang, props.locale.lang);
    return result;
}
module.exports = exports['default'];