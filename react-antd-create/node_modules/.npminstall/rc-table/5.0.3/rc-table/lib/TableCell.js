'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectPath = require('object-path');

var _objectPath2 = _interopRequireDefault(_objectPath);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TableCell = _react2["default"].createClass({
  displayName: 'TableCell',

  propTypes: {
    record: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    index: _react.PropTypes.number,
    indent: _react.PropTypes.number,
    indentSize: _react.PropTypes.number,
    column: _react.PropTypes.object,
    expandIcon: _react.PropTypes.node
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    return !(0, _shallowequal2["default"])(nextProps, this.props);
  },
  isInvalidRenderCellText: function isInvalidRenderCellText(text) {
    return text && !_react2["default"].isValidElement(text) && Object.prototype.toString.call(text) === '[object Object]';
  },
  render: function render() {
    var _props = this.props;
    var record = _props.record;
    var indentSize = _props.indentSize;
    var prefixCls = _props.prefixCls;
    var indent = _props.indent;
    var index = _props.index;
    var expandIcon = _props.expandIcon;
    var column = _props.column;
    var dataIndex = column.dataIndex;
    var render = column.render;
    var _column$className = column.className;
    var className = _column$className === undefined ? '' : _column$className;


    var text = _objectPath2["default"].get(record, dataIndex);
    var tdProps = void 0;
    var colSpan = void 0;
    var rowSpan = void 0;

    if (render) {
      text = render(text, record, index);
      if (this.isInvalidRenderCellText(text)) {
        tdProps = text.props || {};
        rowSpan = tdProps.rowSpan;
        colSpan = tdProps.colSpan;
        text = text.children;
      }
    }

    // Fix https://github.com/ant-design/ant-design/issues/1202
    if (this.isInvalidRenderCellText(text)) {
      text = null;
    }

    var indentText = expandIcon ? _react2["default"].createElement('span', {
      style: { paddingLeft: indentSize * indent + 'px' },
      className: prefixCls + '-indent indent-level-' + indent
    }) : null;

    if (rowSpan === 0 || colSpan === 0) {
      return null;
    }
    return _react2["default"].createElement(
      'td',
      {
        colSpan: colSpan,
        rowSpan: rowSpan,
        className: className
      },
      indentText,
      expandIcon,
      text
    );
  }
});

exports["default"] = TableCell;
module.exports = exports['default'];