'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _rcTreeSelect = require('rc-tree-select');

var _rcTreeSelect2 = _interopRequireDefault(_rcTreeSelect);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TreeSelect = function (_React$Component) {
    (0, _inherits3["default"])(TreeSelect, _React$Component);

    function TreeSelect() {
        (0, _classCallCheck3["default"])(this, TreeSelect);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    TreeSelect.prototype.render = function render() {
        var _classNames;

        var props = this.props;
        var _props = this.props;
        var size = _props.size;
        var className = _props.className;
        var notFoundContent = _props.notFoundContent;
        var prefixCls = _props.prefixCls;

        var cls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3["default"])(_classNames, className, !!className), _classNames));
        var antLocale = this.context.antLocale;

        if (antLocale && antLocale.Select) {
            notFoundContent = notFoundContent || antLocale.Select.notFoundContent;
        }
        var checkable = props.treeCheckable;
        if (checkable) {
            checkable = _react2["default"].createElement('span', { className: prefixCls + '-tree-checkbox-inner' });
        }
        return _react2["default"].createElement(_rcTreeSelect2["default"], (0, _extends3["default"])({}, this.props, { treeCheckable: checkable, className: cls, notFoundContent: notFoundContent }));
    };

    return TreeSelect;
}(_react2["default"].Component);

exports["default"] = TreeSelect;

TreeSelect.TreeNode = _rcTreeSelect.TreeNode;
TreeSelect.SHOW_ALL = _rcTreeSelect.SHOW_ALL;
TreeSelect.SHOW_PARENT = _rcTreeSelect.SHOW_PARENT;
TreeSelect.SHOW_CHILD = _rcTreeSelect.SHOW_CHILD;
TreeSelect.defaultProps = {
    prefixCls: 'ant-select',
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom',
    showSearch: false,
    dropdownClassName: 'ant-select-tree-dropdown'
};
TreeSelect.contextTypes = {
    antLocale: _react2["default"].PropTypes.object
};
module.exports = exports['default'];