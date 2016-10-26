'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _openAnimationFactory = require('./openAnimationFactory');

var _openAnimationFactory2 = _interopRequireDefault(_openAnimationFactory);

function toArray(activeKey) {
  var currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }
  return currentActiveKey;
}

var Collapse = _react2['default'].createClass({
  displayName: 'Collapse',

  propTypes: {
    children: _react.PropTypes.any,
    prefixCls: _react.PropTypes.string,
    activeKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]),
    defaultActiveKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]),
    openAnimation: _react.PropTypes.object,
    onChange: _react.PropTypes.func,
    accordion: _react.PropTypes.bool
  },

  statics: {
    Panel: _Panel2['default']
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-collapse',
      onChange: function onChange() {},
      accordion: false
    };
  },

  getInitialState: function getInitialState() {
    var _props = this.props;
    var activeKey = _props.activeKey;
    var defaultActiveKey = _props.defaultActiveKey;

    var currentActiveKey = defaultActiveKey;
    if ('activeKey' in this.props) {
      currentActiveKey = activeKey;
    }
    return {
      openAnimation: this.props.openAnimation || (0, _openAnimationFactory2['default'])(this.props.prefixCls),
      activeKey: toArray(currentActiveKey)
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('activeKey' in nextProps) {
      this.setState({
        activeKey: toArray(nextProps.activeKey)
      });
    }
    if ('openAnimation' in nextProps) {
      this.setState({
        openAnimation: nextProps.openAnimation
      });
    }
  },

  onClickItem: function onClickItem(key) {
    var _this = this;

    return function () {
      var activeKey = _this.state.activeKey;
      if (_this.props.accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = [].concat(_toConsumableArray(activeKey));
        var index = activeKey.indexOf(key);
        var isActive = index > -1;
        if (isActive) {
          // remove active state
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }
      }
      _this.setActiveKey(activeKey);
    };
  },

  getItems: function getItems() {
    var _this2 = this;

    var activeKey = this.state.activeKey;
    var _props2 = this.props;
    var prefixCls = _props2.prefixCls;
    var accordion = _props2.accordion;

    return _react.Children.map(this.props.children, function (child, index) {
      // If there is no key provide, use the panel order as default key
      var key = child.key || String(index);
      var header = child.props.header;
      var isActive = false;
      if (accordion) {
        isActive = activeKey[0] === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }

      var props = {
        key: key,
        header: header,
        isActive: isActive,
        prefixCls: prefixCls,
        openAnimation: _this2.state.openAnimation,
        children: child.props.children,
        onItemClick: _this2.onClickItem(key).bind(_this2)
      };

      return _react2['default'].cloneElement(child, props);
    });
  },

  setActiveKey: function setActiveKey(activeKey) {
    if (!('activeKey' in this.props)) {
      this.setState({
        activeKey: activeKey
      });
    }
    this.props.onChange(this.props.accordion ? activeKey[0] : activeKey);
  },

  render: function render() {
    var prefixCls = this.props.prefixCls;
    return _react2['default'].createElement(
      'div',
      { className: prefixCls },
      this.getItems()
    );
  }
});

exports['default'] = Collapse;
module.exports = exports['default'];