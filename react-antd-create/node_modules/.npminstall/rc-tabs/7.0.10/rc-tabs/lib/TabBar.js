'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TabBarMixin = require('./TabBarMixin');

var _TabBarMixin2 = _interopRequireDefault(_TabBarMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TabBar = _react2["default"].createClass({
  displayName: 'TabBar',

  mixins: [_TabBarMixin2["default"]],
  render: function render() {
    var tabs = this.getTabs();
    return this.getRootNode(tabs);
  }
});

exports["default"] = TabBar;
module.exports = exports['default'];