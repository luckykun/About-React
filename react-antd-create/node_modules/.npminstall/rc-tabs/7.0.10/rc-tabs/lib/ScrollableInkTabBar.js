'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InkTabBarMixin = require('./InkTabBarMixin');

var _InkTabBarMixin2 = _interopRequireDefault(_InkTabBarMixin);

var _ScrollableTabBarMixin = require('./ScrollableTabBarMixin');

var _ScrollableTabBarMixin2 = _interopRequireDefault(_ScrollableTabBarMixin);

var _TabBarMixin = require('./TabBarMixin');

var _TabBarMixin2 = _interopRequireDefault(_TabBarMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ScrollableInkTabBar = _react2["default"].createClass({
  displayName: 'ScrollableInkTabBar',

  mixins: [_TabBarMixin2["default"], _InkTabBarMixin2["default"], _ScrollableTabBarMixin2["default"]],

  render: function render() {
    var inkBarNode = this.getInkBarNode();
    var tabs = this.getTabs();
    var scrollbarNode = this.getScrollBarNode([inkBarNode, tabs]);
    return this.getRootNode(scrollbarNode);
  }
});

exports["default"] = ScrollableInkTabBar;
module.exports = exports['default'];