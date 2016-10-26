'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

;

var AutoComplete = function (_React$Component) {
    (0, _inherits3["default"])(AutoComplete, _React$Component);

    function AutoComplete() {
        (0, _classCallCheck3["default"])(this, AutoComplete);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    AutoComplete.prototype.render = function render() {
        var _classNames;

        var _props = this.props;
        var size = _props.size;
        var className = _props.className;
        var notFoundContent = _props.notFoundContent;
        var prefixCls = _props.prefixCls;
        var optionLabelProp = _props.optionLabelProp;
        var dataSource = _props.dataSource;
        var children = _props.children;

        var cls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3["default"])(_classNames, className, !!className), (0, _defineProperty3["default"])(_classNames, prefixCls + '-show-search', true), _classNames));
        var options = children || (dataSource ? dataSource.map(function (item, index) {
            switch (typeof item === 'undefined' ? 'undefined' : (0, _typeof3["default"])(item)) {
                case 'string':
                    return _react2["default"].createElement(
                        _select.Option,
                        { key: item },
                        item
                    );
                case 'object':
                    return _react2["default"].createElement(
                        _select.Option,
                        { key: item.value },
                        item.text
                    );
                default:
                    throw new Error('AutoComplete[dataSource] only supports type `string[] | Object[]`.');
            }
        }) : []);
        return _react2["default"].createElement(
            _select2["default"],
            (0, _extends3["default"])({}, this.props, { className: cls, optionLabelProp: optionLabelProp, combobox: true, notFoundContent: notFoundContent }),
            options
        );
    };

    return AutoComplete;
}(_react2["default"].Component);

exports["default"] = AutoComplete;

AutoComplete.Option = _select.Option;
AutoComplete.OptGroup = _select.OptGroup;
AutoComplete.defaultProps = {
    prefixCls: 'ant-select',
    transitionName: 'slide-up',
    optionLabelProp: 'children',
    choiceTransitionName: 'zoom',
    showSearch: false
};
AutoComplete.contextTypes = {
    antLocale: _react2["default"].PropTypes.object
};
module.exports = exports['default'];