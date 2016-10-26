import React from 'react';
import { PaginationProps } from '../pagination';
export interface TableRowSelection {
    type?: 'checkbox' | 'radio';
    selectedRowKeys?: string[];
    onChange?: (selectedRowKeys: string[], selectedRows: Object[]) => any;
    getCheckboxProps?: (record: Object) => Object;
    onSelect?: (record: Object, selected: boolean, selectedRows: Object[]) => any;
    onSelectAll?: (selected: boolean, selectedRows: Object[], changeRows: Object[]) => any;
}
export interface TableColumnConfig {
    title?: React.ReactNode;
    key?: string;
    dataIndex?: string;
    render?: (text: any, record: Object, index: number) => React.ReactNode;
    filters?: {
        text: string;
        value: string;
    }[];
    onFilter?: (value: any, record: Object) => boolean;
    filterMultiple?: boolean;
    filterDropdown?: React.ReactNode;
    sorter?: boolean | ((a: any, b: any) => number);
    colSpan?: number;
    width?: string | number;
    className?: string;
    fixed?: boolean | ('left' | 'right');
    filteredValue?: any[];
    sortOrder?: boolean | ('ascend' | 'descend');
}
export interface TableProps {
    prefixCls?: string;
    dropdownPrefixCls?: string;
    rowSelection?: TableRowSelection;
    pagination?: PaginationProps | boolean;
    size?: 'default' | 'small';
    dataSource?: Object[];
    columns?: TableColumnConfig[];
    rowKey?: string | ((record: Object, index: number) => string);
    rowClassName?: (record: Object, index: number) => string;
    expandedRowRender?: any;
    defaultExpandedRowKeys?: string[];
    expandedRowKeys?: string[];
    expandIconAsCell?: boolean;
    expandIconColumnIndex?: number;
    onChange?: (pagination: PaginationProps | boolean, filters: string[], sorter: Object) => any;
    loading?: boolean;
    locale?: Object;
    indentSize?: number;
    onRowClick?: (record: Object, index: number) => any;
    useFixedHeader?: boolean;
    bordered?: boolean;
    showHeader?: boolean;
    footer?: (currentPageData: Object[]) => React.ReactNode;
    title?: (currentPageData: Object[]) => React.ReactNode;
    scroll?: {
        x?: boolean | number;
        y?: boolean | number;
    };
    childrenColumnName?: 'string';
    bodyStyle?: React.CSSProperties;
    className?: string;
}
export interface TableContext {
    antLocale?: {
        Table?: any;
    };
}
export default class Table extends React.Component<TableProps, any> {
    static propTypes: {
        dataSource: React.Requireable<any>;
        columns: React.Validator<any>;
        prefixCls: React.Requireable<any>;
        useFixedHeader: React.Requireable<any>;
        rowSelection: React.Requireable<any>;
        className: React.Requireable<any>;
        size: React.Requireable<any>;
        loading: React.Requireable<any>;
        bordered: React.Requireable<any>;
        onChange: React.Requireable<any>;
        locale: React.Requireable<any>;
        dropdownPrefixCls: React.Requireable<any>;
    };
    static defaultProps: {
        dataSource: any[];
        prefixCls: string;
        dropdownPrefixCls: string;
        useFixedHeader: boolean;
        rowSelection: any;
        className: string;
        size: string;
        loading: boolean;
        bordered: boolean;
        indentSize: number;
        onChange: () => void;
        locale: {};
        rowKey: string;
        childrenColumnName: string;
    };
    static contextTypes: {
        antLocale: React.Requireable<any>;
    };
    context: TableContext;
    CheckboxPropsCache: Object;
    constructor(props: any);
    getCheckboxPropsByItem(item: any): any;
    getDefaultSelection(): any[];
    getLocale(): any;
    componentWillReceiveProps(nextProps: any): void;
    setSelectedRowKeys(selectedRowKeys: any, {selectWay, record, checked, changeRowKeys}: any): void;
    hasPagination(): boolean;
    isFiltersChanged(filters: any): boolean;
    getSortOrderColumns(columns?: any): any;
    getFilteredValueColumns(columns?: any): any;
    getFiltersFromColumns(columns?: any): {};
    getSortStateFromColumns(columns?: any): {
        sortColumn: any;
        sortOrder: any;
    };
    getSorterFn(): (a: any, b: any) => any;
    toggleSortOrder(order: any, column: any): void;
    handleFilter: (column: any, nextFilters: any) => void;
    handleSelect: (record: any, rowIndex: any, e: any) => void;
    handleRadioSelect: (record: any, rowIndex: any, e: any) => void;
    handleSelectAllRow: (e: any) => void;
    handlePageChange: (current: any) => void;
    renderSelectionRadio: (value: any, record: any, index: any) => JSX.Element;
    renderSelectionCheckBox: (value: any, record: any, index: any) => JSX.Element;
    getRecordKey(record: any, index?: any): any;
    checkSelection(data: any, type: any, byDefaultChecked: any): any;
    renderRowSelection(): TableColumnConfig[];
    getColumnKey(column: any, index?: any): any;
    getMaxCurrent(total: any): any;
    isSortColumn(column: any): boolean;
    renderColumnsDropdown(columns: any): any[];
    handleShowSizeChange: (current: any, pageSize: any) => void;
    renderPagination(): JSX.Element;
    prepareParamsArguments(state: any): [any, string[], Object];
    findColumn(myKey: any): TableColumnConfig;
    getCurrentPageData(): Object[];
    getFlatData(): any[];
    getFlatCurrentPageData(): any[];
    recursiveSort(data: any, sorterFn: any): any;
    getLocalData(): Object[];
    render(): JSX.Element;
}
