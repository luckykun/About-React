'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _react2["default"].createClass({
  displayName: 'TableHeader',

  propTypes: {
    prefixCls: _react.PropTypes.string,
    rowStyle: _react.PropTypes.object,
    rows: _react.PropTypes.array
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    return !(0, _shallowequal2["default"])(nextProps, this.props);
  },
  render: function render() {
    var _props = this.props;
    var prefixCls = _props.prefixCls;
    var rowStyle = _props.rowStyle;
    var rows = _props.rows;

    return _react2["default"].createElement(
      'thead',
      { className: prefixCls + '-thead' },
      rows.map(function (row, index) {
        return _react2["default"].createElement(
          'tr',
          { key: index, style: rowStyle },
          row.map(function (cellProps, i) {
            return _react2["default"].createElement('th', _extends({}, cellProps, { key: i }));
          })
        );
      })
    );
  }
});
module.exports = exports['default'];