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

var _rcTabs = require('rc-tabs');

var _rcTabs2 = _interopRequireDefault(_rcTabs);

var _ScrollableInkTabBar = require('rc-tabs/lib/ScrollableInkTabBar');

var _ScrollableInkTabBar2 = _interopRequireDefault(_ScrollableInkTabBar);

var _TabContent = require('rc-tabs/lib/TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Tabs = function (_React$Component) {
    (0, _inherits3["default"])(Tabs, _React$Component);

    function Tabs() {
        (0, _classCallCheck3["default"])(this, Tabs);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

        _this.createNewTab = function (targetKey) {
            _this.props.onEdit(targetKey, 'add');
        };
        _this.removeTab = function (targetKey, e) {
            e.stopPropagation();
            if (!targetKey) {
                return;
            }
            _this.props.onEdit(targetKey, 'remove');
        };
        _this.handleChange = function (activeKey) {
            _this.props.onChange(activeKey);
        };
        return _this;
    }

    Tabs.prototype.render = function render() {
        var _classNames,
            _this2 = this;

        var _props = this.props;
        var prefixCls = _props.prefixCls;
        var size = _props.size;
        var type = _props.type;
        var tabPosition = _props.tabPosition;
        var children = _props.children;
        var tabBarExtraContent = _props.tabBarExtraContent;
        var hideAdd = _props.hideAdd;
        var onTabClick = _props.onTabClick;
        var animated = _props.animated;

        var className = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, this.props.className, !!this.props.className), (0, _defineProperty3["default"])(_classNames, prefixCls + '-mini', size === 'small' || size === 'mini'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-vertical', tabPosition === 'left' || tabPosition === 'right'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-card', type.indexOf('card') >= 0), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + type, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-no-animation', !animated), _classNames));
        // only card type tabs can be added and closed
        var childrenWithClose = void 0;
        if (type === 'editable-card') {
            childrenWithClose = [];
            _react2["default"].Children.forEach(children, function (child, index) {
                childrenWithClose.push((0, _react.cloneElement)(child, {
                    tab: _react2["default"].createElement(
                        'div',
                        null,
                        child.props.tab,
                        _react2["default"].createElement(_icon2["default"], { type: 'close', onClick: function onClick(e) {
                                return _this2.removeTab(child.key, e);
                            } })
                    ),
                    key: child.key || index
                }));
            });
            // Add new tab handler
            if (!hideAdd) {
                tabBarExtraContent = _react2["default"].createElement(
                    'span',
                    null,
                    _react2["default"].createElement(_icon2["default"], { type: 'plus', className: prefixCls + '-new-tab', onClick: this.createNewTab }),
                    tabBarExtraContent
                );
            }
        }
        tabBarExtraContent = tabBarExtraContent ? _react2["default"].createElement(
            'div',
            { className: prefixCls + '-extra-content' },
            tabBarExtraContent
        ) : null;
        return _react2["default"].createElement(
            _rcTabs2["default"],
            (0, _extends3["default"])({}, this.props, { className: className, tabBarPosition: tabPosition, renderTabBar: function renderTabBar() {
                    return _react2["default"].createElement(_ScrollableInkTabBar2["default"], { extraContent: tabBarExtraContent, onTabClick: onTabClick });
                }, renderTabContent: function renderTabContent() {
                    return _react2["default"].createElement(_TabContent2["default"], { animated: animated });
                }, onChange: this.handleChange }),
            childrenWithClose || children
        );
    };

    return Tabs;
}(_react2["default"].Component);

exports["default"] = Tabs;

Tabs.TabPane = _rcTabs.TabPane;
Tabs.defaultProps = {
    prefixCls: 'ant-tabs',
    type: 'line',
    onChange: function onChange() {},
    onEdit: function onEdit() {},

    hideAdd: false,
    animated: true
};
module.exports = exports['default'];