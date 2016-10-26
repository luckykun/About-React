'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InkTabBarMixin = require('./InkTabBarMixin');

var _InkTabBarMixin2 = _interopRequireDefault(_InkTabBarMixin);

var _TabBarMixin = require('./TabBarMixin');

var _TabBarMixin2 = _interopRequireDefault(_TabBarMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InkTabBar = _react2["default"].createClass({
  displayName: 'InkTabBar',

  mixins: [_TabBarMixin2["default"], _InkTabBarMixin2["default"]],
  render: function render() {
    var inkBarNode = this.getInkBarNode();
    var tabs = this.getTabs();
    return this.getRootNode([inkBarNode, tabs]);
  }
});

exports["default"] = InkTabBar;
module.exports = exports['default'];