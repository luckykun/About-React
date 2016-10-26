import React from 'react';
import { TransferItem } from './index';
export declare function isRenderResultPlainObject(result: any): boolean;
export interface TransferListProps {
    prefixCls?: string;
    dataSource: TransferItem[];
    filter?: string;
    showSearch?: boolean;
    searchPlaceholder?: string;
    titleText?: string;
    style?: React.CSSProperties;
    handleFilter?: (e: any) => void;
    handleSelect?: (selectedItem: any, checked: boolean) => void;
    handleSelectAll?: (dataSource: any[], checkAll: boolean) => void;
    handleClear?: () => void;
    render?: (item: any) => any;
    body?: (props: any) => any;
    footer?: (props: any) => void;
    checkedKeys?: any[];
    checkStatus?: boolean;
    position?: string;
    notFoundContent?: React.ReactNode | string;
    filterOption: (filterText: any, item: any) => boolean;
}
export interface TransferListContext {
    antLocale?: {
        Transfer?: any;
    };
}
export default class TransferList extends React.Component<TransferListProps, any> {
    static defaultProps: {
        dataSource: any[];
        titleText: string;
        showSearch: boolean;
        handleClear: () => void;
        handleFilter: () => void;
        handleSelect: () => void;
        handleSelectAll: () => void;
        render: () => void;
        body: () => void;
        footer: () => void;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        dataSource: React.Requireable<any>;
        showSearch: React.Requireable<any>;
        filterOption: React.Requireable<any>;
        searchPlaceholder: React.Requireable<any>;
        titleText: React.Requireable<any>;
        style: React.Requireable<any>;
        handleClear: React.Requireable<any>;
        handleFilter: React.Requireable<any>;
        handleSelect: React.Requireable<any>;
        handleSelectAll: React.Requireable<any>;
        render: React.Requireable<any>;
        body: React.Requireable<any>;
        footer: React.Requireable<any>;
    };
    static contextTypes: {
        antLocale: React.Requireable<any>;
    };
    context: TransferListContext;
    timer: number;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(...args: any[]): any;
    getCheckStatus(filteredDataSource: any): string;
    handleSelect: (selectedItem: any) => void;
    handleFilter: (e: any) => void;
    handleClear: () => void;
    renderCheckbox({prefixCls, filteredDataSource, checked, checkPart, disabled, checkable}: {
        prefixCls: any;
        filteredDataSource: any;
        checked: any;
        checkPart: any;
        disabled: any;
        checkable: any;
    }): JSX.Element;
    matchFilter(filterText: any, item: any, text: any): boolean;
    render(): JSX.Element;
}
