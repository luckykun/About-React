'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

var _ExpandIcon = require('./ExpandIcon');

var _ExpandIcon2 = _interopRequireDefault(_ExpandIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TableRow = _react2["default"].createClass({
  displayName: 'TableRow',

  propTypes: {
    onDestroy: _react.PropTypes.func,
    onRowClick: _react.PropTypes.func,
    onRowDoubleClick: _react.PropTypes.func,
    record: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    expandIconColumnIndex: _react.PropTypes.number,
    onHover: _react.PropTypes.func,
    columns: _react.PropTypes.array,
    style: _react.PropTypes.object,
    visible: _react.PropTypes.bool,
    index: _react.PropTypes.number,
    hoverKey: _react.PropTypes.any,
    expanded: _react.PropTypes.bool,
    expandable: _react.PropTypes.any,
    onExpand: _react.PropTypes.func,
    needIndentSpaced: _react.PropTypes.bool,
    className: _react.PropTypes.string,
    indent: _react.PropTypes.number,
    indentSize: _react.PropTypes.number,
    expandIconAsCell: _react.PropTypes.bool,
    expandRowByClick: _react.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onRowClick: function onRowClick() {},
      onRowDoubleClick: function onRowDoubleClick() {},
      onDestroy: function onDestroy() {},

      expandIconColumnIndex: 0,
      expandRowByClick: false,
      onHover: function onHover() {}
    };
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    return !(0, _shallowequal2["default"])(nextProps, this.props);
  },
  componentWillUnmount: function componentWillUnmount() {
    this.props.onDestroy(this.props.record);
  },
  onRowClick: function onRowClick(event) {
    var _props = this.props;
    var record = _props.record;
    var index = _props.index;
    var onRowClick = _props.onRowClick;
    var expandable = _props.expandable;
    var expandRowByClick = _props.expandRowByClick;
    var expanded = _props.expanded;
    var onExpand = _props.onExpand;

    if (expandable && expandRowByClick) {
      onExpand(!expanded, record);
    }
    onRowClick(record, index, event);
  },
  onRowDoubleClick: function onRowDoubleClick(event) {
    var _props2 = this.props;
    var record = _props2.record;
    var index = _props2.index;
    var onRowDoubleClick = _props2.onRowDoubleClick;

    onRowDoubleClick(record, index, event);
  },
  onMouseEnter: function onMouseEnter() {
    var _props3 = this.props;
    var onHover = _props3.onHover;
    var hoverKey = _props3.hoverKey;

    onHover(true, hoverKey);
  },
  onMouseLeave: function onMouseLeave() {
    var _props4 = this.props;
    var onHover = _props4.onHover;
    var hoverKey = _props4.hoverKey;

    onHover(false, hoverKey);
  },
  render: function render() {
    var _props5 = this.props;
    var prefixCls = _props5.prefixCls;
    var columns = _props5.columns;
    var record = _props5.record;
    var style = _props5.style;
    var visible = _props5.visible;
    var index = _props5.index;
    var expandIconColumnIndex = _props5.expandIconColumnIndex;
    var expandIconAsCell = _props5.expandIconAsCell;
    var expanded = _props5.expanded;
    var expandRowByClick = _props5.expandRowByClick;
    var expandable = _props5.expandable;
    var onExpand = _props5.onExpand;
    var needIndentSpaced = _props5.needIndentSpaced;
    var className = _props5.className;
    var indent = _props5.indent;
    var indentSize = _props5.indentSize;


    var cells = [];

    var expandIcon = _react2["default"].createElement(_ExpandIcon2["default"], {
      expandable: expandable,
      prefixCls: prefixCls,
      onExpand: onExpand,
      needIndentSpaced: needIndentSpaced,
      expanded: expanded,
      record: record
    });

    for (var i = 0; i < columns.length; i++) {
      if (expandIconAsCell && i === 0) {
        cells.push(_react2["default"].createElement(
          'td',
          {
            className: prefixCls + '-expand-icon-cell',
            key: 'rc-table-expand-icon-cell'
          },
          expandIcon
        ));
      }
      var isColumnHaveExpandIcon = expandIconAsCell || expandRowByClick ? false : i === expandIconColumnIndex;
      cells.push(_react2["default"].createElement(_TableCell2["default"], {
        prefixCls: prefixCls,
        record: record,
        indentSize: indentSize,
        indent: indent,
        index: index,
        column: columns[i],
        key: columns[i].key,
        expandIcon: isColumnHaveExpandIcon ? expandIcon : null
      }));
    }

    return _react2["default"].createElement(
      'tr',
      {
        onClick: this.onRowClick,
        onDoubleClick: this.onRowDoubleClick,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        className: prefixCls + ' ' + className + ' ' + prefixCls + '-level-' + indent,
        style: visible ? style : _extends({}, style, { display: 'none' })
      },
      cells
    );
  }
});

exports["default"] = TableRow;
module.exports = exports['default'];