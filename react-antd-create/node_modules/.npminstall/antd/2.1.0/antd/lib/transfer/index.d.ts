import React from 'react';
import List from './list';
import Operation from './operation';
import Search from './search';
export interface TransferItem {
    key: number | string;
    title: string;
    description?: string;
    disabled?: boolean;
}
export interface TransferProps {
    dataSource: TransferItem[];
    targetKeys: string[];
    render?: (record: TransferItem) => any;
    onChange?: (targetKeys: TransferItem[], direction: string, moveKeys: any) => void;
    onSelectChange?: (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void;
    listStyle?: React.CSSProperties;
    className?: string;
    prefixCls?: string;
    titles?: string[];
    operations?: string[];
    showSearch?: boolean;
    searchPlaceholder?: string;
    notFoundContent?: React.ReactNode;
    footer?: (props: any) => any;
    style?: React.CSSProperties;
    filterOption: (inputValue: any, item: any) => boolean;
    body?: (props: any) => any;
    rowKey?: (record: any) => string;
}
export interface TransferContext {
    antLocale?: {
        Transfer?: any;
    };
}
export default class Transfer extends React.Component<TransferProps, any> {
    static List: typeof List;
    static Operation: typeof Operation;
    static Search: typeof Search;
    static defaultProps: {
        prefixCls: string;
        dataSource: any[];
        render: () => void;
        onChange: () => void;
        onSelectChange: () => void;
        operations: any[];
        showSearch: boolean;
        body: () => void;
        footer: () => void;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        dataSource: React.Requireable<any>;
        render: React.Requireable<any>;
        targetKeys: React.Requireable<any>;
        onChange: React.Requireable<any>;
        height: React.Requireable<any>;
        listStyle: React.Requireable<any>;
        className: React.Requireable<any>;
        titles: React.Requireable<any>;
        operations: React.Requireable<any>;
        showSearch: React.Requireable<any>;
        filterOption: React.Requireable<any>;
        searchPlaceholder: React.Requireable<any>;
        notFoundContent: React.Requireable<any>;
        body: React.Requireable<any>;
        footer: React.Requireable<any>;
        rowKey: React.Requireable<any>;
    };
    static contextTypes: {
        antLocale: React.Requireable<any>;
    };
    context: TransferContext;
    splitedDataSource: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    splitDataSource(props: any): any;
    moveTo: (direction: any) => void;
    moveToLeft: () => void;
    moveToRight: () => void;
    handleSelectChange(direction: string, holder: string[]): void;
    handleSelectAll: (direction: any, filteredDataSource: any, checkAll: any) => void;
    handleLeftSelectAll: (filteredDataSource: any, checkAll: any) => void;
    handleRightSelectAll: (filteredDataSource: any, checkAll: any) => void;
    handleFilter: (direction: any, e: any) => void;
    handleLeftFilter: (e: any) => void;
    handleRightFilter: (e: any) => void;
    handleClear: (direction: any) => void;
    handleLeftClear: () => void;
    handleRightClear: () => void;
    handleSelect: (direction: any, selectedItem: any, checked: any) => void;
    handleLeftSelect: (selectedItem: any, checked: any) => void;
    handleRightSelect: (selectedItem: any, checked: any) => void;
    getTitles(): string[];
    render(): JSX.Element;
}
