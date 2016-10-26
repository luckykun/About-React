'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _rcTable = require('rc-table');

var _rcTable2 = _interopRequireDefault(_rcTable);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('../radio');

var _radio2 = _interopRequireDefault(_radio);

var _filterDropdown = require('./filterDropdown');

var _filterDropdown2 = _interopRequireDefault(_filterDropdown);

var _pagination = require('../pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _spin = require('../spin');

var _spin2 = _interopRequireDefault(_spin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('./util');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _splitObject3 = require('../_util/splitObject');

var _splitObject4 = _interopRequireDefault(_splitObject3);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}
function stopPropagation(e) {
    e.stopPropagation();
    if (e.nativeEvent.stopImmediatePropagation) {
        e.nativeEvent.stopImmediatePropagation();
    }
}
var defaultLocale = {
    filterTitle: '筛选',
    filterConfirm: '确定',
    filterReset: '重置',
    emptyText: _react2["default"].createElement(
        'span',
        null,
        _react2["default"].createElement(_icon2["default"], { type: 'frown-o' }),
        '\u6682\u65E0\u6570\u636E'
    )
};
var defaultPagination = {
    onChange: noop,
    onShowSizeChange: noop
};

var Table = function (_React$Component) {
    (0, _inherits3["default"])(Table, _React$Component);

    function Table(props) {
        (0, _classCallCheck3["default"])(this, Table);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.handleFilter = function (column, nextFilters) {
            var props = _this.props;
            var pagination = (0, _objectAssign2["default"])({}, _this.state.pagination);
            var filters = (0, _objectAssign2["default"])({}, _this.state.filters, (0, _defineProperty3["default"])({}, _this.getColumnKey(column), nextFilters));
            // Remove filters not in current columns
            var currentColumnKeys = props.columns.map(function (c) {
                return _this.getColumnKey(c);
            });
            Object.keys(filters).forEach(function (columnKey) {
                if (currentColumnKeys.indexOf(columnKey) < 0) {
                    delete filters[columnKey];
                }
            });
            if (props.pagination) {
                // Reset current prop
                pagination.current = 1;
                pagination.onChange(pagination.current);
            }
            var newState = {
                selectionDirty: false,
                pagination: pagination,
                filters: {}
            };
            var filtersToSetState = (0, _objectAssign2["default"])({}, filters);
            // Remove filters which is controlled
            _this.getFilteredValueColumns().forEach(function (col) {
                var columnKey = _this.getColumnKey(col);
                if (columnKey) {
                    delete filtersToSetState[columnKey];
                }
            });
            if (Object.keys(filtersToSetState).length > 0) {
                newState.filters = filtersToSetState;
            }
            // Controlled current prop will not respond user interaction
            if (props.pagination && 'current' in props.pagination) {
                newState.pagination = (0, _objectAssign2["default"])({}, pagination, {
                    current: _this.state.pagination.current
                });
            }
            _this.setState(newState, function () {
                props.onChange.apply(null, _this.prepareParamsArguments((0, _objectAssign2["default"])({}, _this.state, {
                    selectionDirty: false,
                    filters: filters,
                    pagination: pagination
                })));
            });
        };
        _this.handleSelect = function (record, rowIndex, e) {
            var checked = e.target.checked;
            var defaultSelection = _this.state.selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.state.selectedRowKeys.concat(defaultSelection);
            var key = _this.getRecordKey(record, rowIndex);
            if (checked) {
                selectedRowKeys.push(_this.getRecordKey(record, rowIndex));
            } else {
                selectedRowKeys = selectedRowKeys.filter(function (i) {
                    return key !== i;
                });
            }
            _this.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: 'onSelect',
                record: record,
                checked: checked
            });
        };
        _this.handleRadioSelect = function (record, rowIndex, e) {
            var checked = e.target.checked;
            var defaultSelection = _this.state.selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.state.selectedRowKeys.concat(defaultSelection);
            var key = _this.getRecordKey(record, rowIndex);
            selectedRowKeys = [key];
            _this.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: 'onSelect',
                record: record,
                checked: checked
            });
        };
        _this.handleSelectAllRow = function (e) {
            var checked = e.target.checked;
            var data = _this.getFlatCurrentPageData();
            var defaultSelection = _this.state.selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.state.selectedRowKeys.concat(defaultSelection);
            var changableRowKeys = data.filter(function (item) {
                return !_this.getCheckboxPropsByItem(item).disabled;
            }).map(function (item, i) {
                return _this.getRecordKey(item, i);
            });
            // 记录变化的列
            var changeRowKeys = [];
            if (checked) {
                changableRowKeys.forEach(function (key) {
                    if (selectedRowKeys.indexOf(key) < 0) {
                        selectedRowKeys.push(key);
                        changeRowKeys.push(key);
                    }
                });
            } else {
                changableRowKeys.forEach(function (key) {
                    if (selectedRowKeys.indexOf(key) >= 0) {
                        selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
                        changeRowKeys.push(key);
                    }
                });
            }
            _this.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: 'onSelectAll',
                checked: checked,
                changeRowKeys: changeRowKeys
            });
        };
        _this.handlePageChange = function (current) {
            var props = _this.props;
            var pagination = (0, _objectAssign2["default"])({}, _this.state.pagination);
            if (current) {
                pagination.current = current;
            } else {
                pagination.current = pagination.current || 1;
            }
            pagination.onChange(pagination.current);
            var newState = {
                selectionDirty: false,
                pagination: pagination
            };
            // Controlled current prop will not respond user interaction
            if (props.pagination && 'current' in props.pagination) {
                newState.pagination = (0, _objectAssign2["default"])({}, pagination, {
                    current: _this.state.pagination.current
                });
            }
            _this.setState(newState);
            _this.props.onChange.apply(null, _this.prepareParamsArguments((0, _objectAssign2["default"])({}, _this.state, {
                selectionDirty: false,
                pagination: pagination
            })));
        };
        _this.renderSelectionRadio = function (value, record, index) {
            var rowIndex = _this.getRecordKey(record, index); // 从 1 开始
            var props = _this.getCheckboxPropsByItem(record);
            var checked = void 0;
            if (_this.state.selectionDirty) {
                checked = _this.state.selectedRowKeys.indexOf(rowIndex) >= 0;
            } else {
                checked = _this.state.selectedRowKeys.indexOf(rowIndex) >= 0 || _this.getDefaultSelection().indexOf(rowIndex) >= 0;
            }
            return _react2["default"].createElement(
                'span',
                { onClick: stopPropagation },
                _react2["default"].createElement(_radio2["default"], { disabled: props.disabled, onChange: function onChange(e) {
                        return _this.handleRadioSelect(record, rowIndex, e);
                    }, value: rowIndex, checked: checked })
            );
        };
        _this.renderSelectionCheckBox = function (value, record, index) {
            var rowIndex = _this.getRecordKey(record, index); // 从 1 开始
            var checked = void 0;
            if (_this.state.selectionDirty) {
                checked = _this.state.selectedRowKeys.indexOf(rowIndex) >= 0;
            } else {
                checked = _this.state.selectedRowKeys.indexOf(rowIndex) >= 0 || _this.getDefaultSelection().indexOf(rowIndex) >= 0;
            }
            var props = _this.getCheckboxPropsByItem(record);
            return _react2["default"].createElement(
                'span',
                { onClick: stopPropagation },
                _react2["default"].createElement(_checkbox2["default"], { checked: checked, disabled: props.disabled, onChange: function onChange(e) {
                        return _this.handleSelect(record, rowIndex, e);
                    } })
            );
        };
        _this.handleShowSizeChange = function (current, pageSize) {
            var pagination = _this.state.pagination;
            pagination.onShowSizeChange(current, pageSize);
            var nextPagination = (0, _objectAssign2["default"])({}, pagination, { pageSize: pageSize, current: current });
            _this.setState({ pagination: nextPagination });
            _this.props.onChange.apply(null, _this.prepareParamsArguments((0, _objectAssign2["default"])({}, _this.state, {
                pagination: nextPagination
            })));
        };
        (0, _warning2["default"])(!('columnsPageRange' in props || 'columnsPageSize' in props), '`columnsPageRange` and `columnsPageSize` are removed, please use ' + '[fixed columns](http://ant.design/components/table/#components-table-demo-fixed-columns) ' + 'instead.');
        var pagination = props.pagination || {};
        _this.state = (0, _objectAssign2["default"])({}, _this.getSortStateFromColumns(), {
            // 减少状态
            selectedRowKeys: (props.rowSelection || {}).selectedRowKeys || [],
            filters: _this.getFiltersFromColumns(),
            selectionDirty: false,
            pagination: _this.hasPagination() ? (0, _objectAssign2["default"])({}, defaultPagination, pagination, {
                current: pagination.defaultCurrent || pagination.current || 1,
                pageSize: pagination.defaultPageSize || pagination.pageSize || 10
            }) : {}
        });
        _this.CheckboxPropsCache = {};
        return _this;
    }

    Table.prototype.getCheckboxPropsByItem = function getCheckboxPropsByItem(item) {
        var _props$rowSelection = this.props.rowSelection;
        var rowSelection = _props$rowSelection === undefined ? {} : _props$rowSelection;

        if (!rowSelection.getCheckboxProps) {
            return {};
        }
        var key = this.getRecordKey(item);
        // Cache checkboxProps
        if (!this.CheckboxPropsCache[key]) {
            this.CheckboxPropsCache[key] = rowSelection.getCheckboxProps(item);
        }
        return this.CheckboxPropsCache[key];
    };

    Table.prototype.getDefaultSelection = function getDefaultSelection() {
        var _this2 = this;

        var _props$rowSelection2 = this.props.rowSelection;
        var rowSelection = _props$rowSelection2 === undefined ? {} : _props$rowSelection2;

        if (!rowSelection.getCheckboxProps) {
            return [];
        }
        return this.getFlatData().filter(function (item) {
            return _this2.getCheckboxPropsByItem(item).defaultChecked;
        }).map(function (record, rowIndex) {
            return _this2.getRecordKey(record, rowIndex);
        });
    };

    Table.prototype.getLocale = function getLocale() {
        var locale = {};
        if (this.context.antLocale && this.context.antLocale.Table) {
            locale = this.context.antLocale.Table;
        }
        return (0, _objectAssign2["default"])({}, defaultLocale, locale, this.props.locale);
    };

    Table.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this3 = this;

        if ('pagination' in nextProps && nextProps.pagination !== false) {
            this.setState(function (previousState) {
                var newPagination = (0, _objectAssign2["default"])({}, defaultPagination, previousState.pagination, nextProps.pagination);
                newPagination.current = newPagination.current || 1;
                return { pagination: newPagination };
            });
        }
        // dataSource 的变化会清空选中项
        if ('dataSource' in nextProps && nextProps.dataSource !== this.props.dataSource) {
            this.setState({
                selectionDirty: false
            });
            this.CheckboxPropsCache = {};
        }
        if (nextProps.rowSelection && 'selectedRowKeys' in nextProps.rowSelection) {
            this.setState({
                selectedRowKeys: nextProps.rowSelection.selectedRowKeys || []
            });
            var rowSelection = this.props.rowSelection;

            if (rowSelection && nextProps.rowSelection.getCheckboxProps !== rowSelection.getCheckboxProps) {
                this.CheckboxPropsCache = {};
            }
        }
        if (this.getSortOrderColumns(nextProps.columns).length > 0) {
            var sortState = this.getSortStateFromColumns(nextProps.columns);
            if (sortState.sortColumn !== this.state.sortColumn || sortState.sortOrder !== this.state.sortOrder) {
                this.setState(sortState);
            }
        }
        var filteredValueColumns = this.getFilteredValueColumns(nextProps.columns);
        if (filteredValueColumns.length > 0) {
            (function () {
                var filtersFromColumns = _this3.getFiltersFromColumns(nextProps.columns);
                var newFilters = (0, _objectAssign2["default"])({}, _this3.state.filters);
                Object.keys(filtersFromColumns).forEach(function (key) {
                    newFilters[key] = filtersFromColumns[key];
                });
                if (_this3.isFiltersChanged(newFilters)) {
                    _this3.setState({ filters: newFilters });
                }
            })();
        }
    };

    Table.prototype.setSelectedRowKeys = function setSelectedRowKeys(selectedRowKeys, _ref) {
        var _this4 = this;

        var selectWay = _ref.selectWay;
        var record = _ref.record;
        var checked = _ref.checked;
        var changeRowKeys = _ref.changeRowKeys;
        var _props$rowSelection3 = this.props.rowSelection;
        var rowSelection = _props$rowSelection3 === undefined ? {} : _props$rowSelection3;

        if (rowSelection && !('selectedRowKeys' in rowSelection)) {
            this.setState({ selectedRowKeys: selectedRowKeys });
        }
        var data = this.getFlatData();
        if (!rowSelection.onChange && !rowSelection[selectWay]) {
            return;
        }
        var selectedRows = data.filter(function (row, i) {
            return selectedRowKeys.indexOf(_this4.getRecordKey(row, i)) >= 0;
        });
        if (rowSelection.onChange) {
            rowSelection.onChange(selectedRowKeys, selectedRows);
        }
        if (selectWay === 'onSelect' && rowSelection.onSelect) {
            rowSelection.onSelect(record, checked, selectedRows);
        } else if (selectWay === 'onSelectAll' && rowSelection.onSelectAll) {
            var changeRows = data.filter(function (row, i) {
                return changeRowKeys.indexOf(_this4.getRecordKey(row, i)) >= 0;
            });
            rowSelection.onSelectAll(checked, selectedRows, changeRows);
        }
    };

    Table.prototype.hasPagination = function hasPagination() {
        return this.props.pagination !== false;
    };

    Table.prototype.isFiltersChanged = function isFiltersChanged(filters) {
        var _this5 = this;

        var filtersChanged = false;
        if (Object.keys(filters).length !== Object.keys(this.state.filters).length) {
            filtersChanged = true;
        } else {
            Object.keys(filters).forEach(function (columnKey) {
                if (filters[columnKey] !== _this5.state.filters[columnKey]) {
                    filtersChanged = true;
                }
            });
        }
        return filtersChanged;
    };

    Table.prototype.getSortOrderColumns = function getSortOrderColumns(columns) {
        return (columns || this.props.columns || []).filter(function (column) {
            return 'sortOrder' in column;
        });
    };

    Table.prototype.getFilteredValueColumns = function getFilteredValueColumns(columns) {
        return (columns || this.props.columns || []).filter(function (column) {
            return column.filteredValue;
        });
    };

    Table.prototype.getFiltersFromColumns = function getFiltersFromColumns(columns) {
        var _this6 = this;

        var filters = {};
        this.getFilteredValueColumns(columns).forEach(function (col) {
            filters[_this6.getColumnKey(col)] = col.filteredValue;
        });
        return filters;
    };

    Table.prototype.getSortStateFromColumns = function getSortStateFromColumns(columns) {
        // return fisrt column which sortOrder is not falsy
        var sortedColumn = this.getSortOrderColumns(columns).filter(function (col) {
            return col.sortOrder;
        })[0];
        if (sortedColumn) {
            return {
                sortColumn: sortedColumn,
                sortOrder: sortedColumn.sortOrder
            };
        }
        return {
            sortColumn: null,
            sortOrder: null
        };
    };

    Table.prototype.getSorterFn = function getSorterFn() {
        var _state = this.state;
        var sortOrder = _state.sortOrder;
        var sortColumn = _state.sortColumn;

        if (!sortOrder || !sortColumn || typeof sortColumn.sorter !== 'function') {
            return;
        }
        return function (a, b) {
            var result = sortColumn.sorter(a, b);
            if (result !== 0) {
                return sortOrder === 'descend' ? -result : result;
            }
            return 0;
        };
    };

    Table.prototype.toggleSortOrder = function toggleSortOrder(order, column) {
        var _state2 = this.state;
        var sortColumn = _state2.sortColumn;
        var sortOrder = _state2.sortOrder;
        // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题

        var isSortColumn = this.isSortColumn(column);
        if (!isSortColumn) {
            sortOrder = order;
            sortColumn = column;
        } else {
            if (sortOrder === order) {
                sortOrder = '';
                sortColumn = null;
            } else {
                sortOrder = order;
            }
        }
        var newState = {
            sortOrder: sortOrder,
            sortColumn: sortColumn
        };
        // Controlled
        if (this.getSortOrderColumns().length === 0) {
            this.setState(newState);
        }
        this.props.onChange.apply(null, this.prepareParamsArguments((0, _objectAssign2["default"])({}, this.state, newState)));
    };

    Table.prototype.getRecordKey = function getRecordKey(record, index) {
        var rowKey = this.props.rowKey;
        if (typeof rowKey === 'function') {
            return rowKey(record, index);
        }
        var recordKey = record[rowKey] !== undefined ? record[rowKey] : index;
        (0, _warning2["default"])(recordKey !== undefined, 'Each record in table should have a unique `key` prop, or set `rowKey` to an unique primary key.');
        return recordKey;
    };

    Table.prototype.checkSelection = function checkSelection(data, type, byDefaultChecked) {
        var _this7 = this;

        // type should be 'every' | 'some'
        if (type === 'every' || type === 'some') {
            return byDefaultChecked ? data[type](function (item) {
                return _this7.getCheckboxPropsByItem(item).defaultChecked;
            }) : data[type](function (item, i) {
                return _this7.state.selectedRowKeys.indexOf(_this7.getRecordKey(item, i)) >= 0;
            });
        }
        return false;
    };

    Table.prototype.renderRowSelection = function renderRowSelection() {
        var _this8 = this;

        var prefixCls = this.props.prefixCls;
        var columns = this.props.columns.concat();
        if (this.props.rowSelection) {
            var data = this.getFlatCurrentPageData().filter(function (item) {
                if (_this8.props.rowSelection.getCheckboxProps) {
                    return !_this8.getCheckboxPropsByItem(item).disabled;
                }
                return true;
            });
            var checked = void 0;
            var indeterminate = void 0;
            if (!data.length) {
                checked = false;
                indeterminate = false;
            } else {
                checked = this.state.selectionDirty ? this.checkSelection(data, 'every', false) : this.checkSelection(data, 'every', false) || this.checkSelection(data, 'every', true);
                indeterminate = this.state.selectionDirty ? this.checkSelection(data, 'some', false) && !this.checkSelection(data, 'every', false) : this.checkSelection(data, 'some', false) && !this.checkSelection(data, 'every', false) || this.checkSelection(data, 'some', true) && !this.checkSelection(data, 'every', true);
            }
            var selectionColumn = void 0;
            if (this.props.rowSelection.type === 'radio') {
                selectionColumn = {
                    key: 'selection-column',
                    render: this.renderSelectionRadio,
                    className: prefixCls + '-selection-column'
                };
            } else {
                var checkboxAllDisabled = data.every(function (item) {
                    return _this8.getCheckboxPropsByItem(item).disabled;
                });
                var checkboxAll = _react2["default"].createElement(_checkbox2["default"], { checked: checked, indeterminate: indeterminate, disabled: checkboxAllDisabled, onChange: this.handleSelectAllRow });
                selectionColumn = {
                    key: 'selection-column',
                    title: checkboxAll,
                    render: this.renderSelectionCheckBox,
                    className: prefixCls + '-selection-column'
                };
            }
            if (columns.some(function (column) {
                return column.fixed === 'left' || column.fixed === true;
            })) {
                selectionColumn.fixed = 'left';
            }
            if (columns[0] && columns[0].key === 'selection-column') {
                columns[0] = selectionColumn;
            } else {
                columns.unshift(selectionColumn);
            }
        }
        return columns;
    };

    Table.prototype.getColumnKey = function getColumnKey(column, index) {
        return column.key || column.dataIndex || index;
    };

    Table.prototype.getMaxCurrent = function getMaxCurrent(total) {
        var _state$pagination = this.state.pagination;
        var current = _state$pagination.current;
        var pageSize = _state$pagination.pageSize;

        if ((current - 1) * pageSize >= total) {
            return current - 1;
        }
        return current;
    };

    Table.prototype.isSortColumn = function isSortColumn(column) {
        var sortColumn = this.state.sortColumn;

        if (!column || !sortColumn) {
            return false;
        }
        return this.getColumnKey(sortColumn) === this.getColumnKey(column);
    };

    Table.prototype.renderColumnsDropdown = function renderColumnsDropdown(columns) {
        var _this9 = this;

        var _props = this.props;
        var prefixCls = _props.prefixCls;
        var dropdownPrefixCls = _props.dropdownPrefixCls;
        var sortOrder = this.state.sortOrder;

        var locale = this.getLocale();
        return (0, _util.treeMap)(columns, function (originColumn, i) {
            var column = (0, _objectAssign2["default"])({}, originColumn);
            var key = _this9.getColumnKey(column, i);
            var filterDropdown = void 0;
            var sortButton = void 0;
            if (column.filters && column.filters.length > 0 || column.filterDropdown) {
                var colFilters = _this9.state.filters[key] || [];
                filterDropdown = _react2["default"].createElement(_filterDropdown2["default"], { locale: locale, column: column, selectedKeys: colFilters, confirmFilter: _this9.handleFilter, prefixCls: prefixCls + '-filter', dropdownPrefixCls: dropdownPrefixCls });
            }
            if (column.sorter) {
                var isSortColumn = _this9.isSortColumn(column);
                if (isSortColumn) {
                    column.className = column.className || '';
                    if (sortOrder) {
                        column.className += ' ' + prefixCls + '-column-sort';
                    }
                }
                var isAscend = isSortColumn && sortOrder === 'ascend';
                var isDescend = isSortColumn && sortOrder === 'descend';
                sortButton = _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-column-sorter' },
                    _react2["default"].createElement(
                        'span',
                        { className: prefixCls + '-column-sorter-up ' + (isAscend ? 'on' : 'off'), title: '\u2191', onClick: function onClick() {
                                return _this9.toggleSortOrder('ascend', column);
                            } },
                        _react2["default"].createElement(_icon2["default"], { type: 'caret-up' })
                    ),
                    _react2["default"].createElement(
                        'span',
                        { className: prefixCls + '-column-sorter-down ' + (isDescend ? 'on' : 'off'), title: '\u2193', onClick: function onClick() {
                                return _this9.toggleSortOrder('descend', column);
                            } },
                        _react2["default"].createElement(_icon2["default"], { type: 'caret-down' })
                    )
                );
            }
            column.title = _react2["default"].createElement(
                'span',
                null,
                column.title,
                sortButton,
                filterDropdown
            );
            return column;
        });
    };

    Table.prototype.renderPagination = function renderPagination() {
        // 强制不需要分页
        if (!this.hasPagination()) {
            return null;
        }
        var size = 'default';
        var pagination = this.state.pagination;

        if (pagination.size) {
            size = pagination.size;
        } else if (this.props.size === 'middle' || this.props.size === 'small') {
            size = 'small';
        }
        var total = pagination.total || this.getLocalData().length;
        return total > 0 ? _react2["default"].createElement(_pagination2["default"], (0, _extends3["default"])({}, pagination, { className: this.props.prefixCls + '-pagination', onChange: this.handlePageChange, total: total, size: size, current: this.getMaxCurrent(total), onShowSizeChange: this.handleShowSizeChange })) : null;
    };

    Table.prototype.prepareParamsArguments = function prepareParamsArguments(state) {
        // 准备筛选、排序、分页的参数
        var pagination = state.pagination;
        var filters = state.filters;
        var sorter = {};
        if (state.sortColumn && state.sortOrder) {
            sorter.column = state.sortColumn;
            sorter.order = state.sortOrder;
            sorter.field = state.sortColumn.dataIndex;
            sorter.columnKey = this.getColumnKey(state.sortColumn);
        }
        return [pagination, filters, sorter];
    };

    Table.prototype.findColumn = function findColumn(myKey) {
        var _this10 = this;

        return this.props.columns.filter(function (c) {
            return _this10.getColumnKey(c) === myKey;
        })[0];
    };

    Table.prototype.getCurrentPageData = function getCurrentPageData() {
        var data = this.getLocalData();
        var current = void 0;
        var pageSize = void 0;
        var state = this.state;
        // 如果没有分页的话，默认全部展示
        if (!this.hasPagination()) {
            pageSize = Number.MAX_VALUE;
            current = 1;
        } else {
            pageSize = state.pagination.pageSize;
            current = this.getMaxCurrent(state.pagination.total || data.length);
        }
        // 分页
        // ---
        // 当数据量少于等于每页数量时，直接设置数据
        // 否则进行读取分页数据
        if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
            data = data.filter(function (item, i) {
                return i >= (current - 1) * pageSize && i < current * pageSize;
            });
        }
        return data;
    };

    Table.prototype.getFlatData = function getFlatData() {
        return (0, _util.flatArray)(this.getLocalData());
    };

    Table.prototype.getFlatCurrentPageData = function getFlatCurrentPageData() {
        return (0, _util.flatArray)(this.getCurrentPageData());
    };

    Table.prototype.recursiveSort = function recursiveSort(data, sorterFn) {
        var _this11 = this;

        var childrenColumnName = this.props.childrenColumnName;

        return data.sort(sorterFn).map(function (item) {
            return item[childrenColumnName] ? (0, _objectAssign2["default"])({}, item, (0, _defineProperty3["default"])({}, childrenColumnName, _this11.recursiveSort(item[childrenColumnName], sorterFn))) : item;
        });
    };

    Table.prototype.getLocalData = function getLocalData() {
        var _this12 = this;

        var state = this.state;
        var dataSource = this.props.dataSource;

        var data = dataSource || [];
        // 优化本地排序
        data = data.slice(0);
        var sorterFn = this.getSorterFn();
        if (sorterFn) {
            data = this.recursiveSort(data, sorterFn);
        }
        // 筛选
        if (state.filters) {
            Object.keys(state.filters).forEach(function (columnKey) {
                var col = _this12.findColumn(columnKey);
                if (!col) {
                    return;
                }
                var values = state.filters[columnKey] || [];
                if (values.length === 0) {
                    return;
                }
                data = col.onFilter ? data.filter(function (record) {
                    return values.some(function (v) {
                        return col.onFilter(v, record);
                    });
                }) : data;
            });
        }
        return data;
    };

    Table.prototype.render = function render() {
        var _classNames,
            _this13 = this;

        var _splitObject = (0, _splitObject4["default"])(this.props, ['style', 'className', 'prefixCls']);

        var _splitObject2 = (0, _slicedToArray3["default"])(_splitObject, 2);

        var _splitObject2$ = _splitObject2[0];
        var style = _splitObject2$.style;
        var className = _splitObject2$.className;
        var prefixCls = _splitObject2$.prefixCls;
        var restProps = _splitObject2[1];

        var data = this.getCurrentPageData();
        var columns = this.renderRowSelection();
        var expandIconAsCell = this.props.expandedRowRender && this.props.expandIconAsCell !== false;
        var locale = this.getLocale();
        var classString = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + this.props.size, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-bordered', this.props.bordered), (0, _defineProperty3["default"])(_classNames, prefixCls + '-empty', !data.length), _classNames));
        columns = this.renderColumnsDropdown(columns);
        columns = columns.map(function (column, i) {
            var newColumn = (0, _objectAssign2["default"])({}, column);
            newColumn.key = _this13.getColumnKey(newColumn, i);
            return newColumn;
        });
        var expandIconColumnIndex = columns[0] && columns[0].key === 'selection-column' ? 1 : 0;
        if ('expandIconColumnIndex' in restProps) {
            expandIconColumnIndex = restProps.expandIconColumnIndex;
        }
        var table = _react2["default"].createElement(_rcTable2["default"], (0, _extends3["default"])({}, restProps, { prefixCls: prefixCls, data: data, columns: columns, className: classString, expandIconColumnIndex: expandIconColumnIndex, expandIconAsCell: expandIconAsCell, emptyText: function emptyText() {
                return locale.emptyText;
            } }));
        // if there is no pagination or no data,
        // the height of spin should decrease by half of pagination
        var paginationPatchClass = this.hasPagination() && data && data.length !== 0 ? prefixCls + '-with-pagination' : prefixCls + '-without-pagination';
        var spinClassName = this.props.loading ? paginationPatchClass + ' ' + prefixCls + '-spin-holder' : '';
        table = _react2["default"].createElement(
            _spin2["default"],
            { className: spinClassName, spinning: this.props.loading },
            table
        );
        return _react2["default"].createElement(
            'div',
            { className: className + ' clearfix', style: style },
            table,
            this.renderPagination()
        );
    };

    return Table;
}(_react2["default"].Component);

exports["default"] = Table;

Table.propTypes = {
    dataSource: _react2["default"].PropTypes.array,
    columns: _react2["default"].PropTypes.array.isRequired,
    prefixCls: _react2["default"].PropTypes.string,
    useFixedHeader: _react2["default"].PropTypes.bool,
    rowSelection: _react2["default"].PropTypes.object,
    className: _react2["default"].PropTypes.string,
    size: _react2["default"].PropTypes.string,
    loading: _react2["default"].PropTypes.bool,
    bordered: _react2["default"].PropTypes.bool,
    onChange: _react2["default"].PropTypes.func,
    locale: _react2["default"].PropTypes.object,
    dropdownPrefixCls: _react2["default"].PropTypes.string
};
Table.defaultProps = {
    dataSource: [],
    prefixCls: 'ant-table',
    dropdownPrefixCls: 'ant-dropdown',
    useFixedHeader: false,
    rowSelection: null,
    className: '',
    size: 'large',
    loading: false,
    bordered: false,
    indentSize: 20,
    onChange: noop,
    locale: {},
    rowKey: 'key',
    childrenColumnName: 'children'
};
Table.contextTypes = {
    antLocale: _react2["default"].PropTypes.object
};
module.exports = exports['default'];