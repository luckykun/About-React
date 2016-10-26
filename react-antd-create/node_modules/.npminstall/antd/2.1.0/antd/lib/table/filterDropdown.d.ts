import React from 'react';
export interface FilterDropdownMenuWrapperProps {
    onClick?: Function;
    children?: any;
    className?: string;
}
export interface FilterMenuProps {
    locale: any;
    selectedKeys: string[];
    column: {
        filterMultiple?: boolean;
        filterDropdown?: React.ReactNode;
        filters?: string[];
    };
    confirmFilter: (column: Object, selectedKeys: string[]) => any;
    prefixCls: string;
    dropdownPrefixCls: string;
}
export default class FilterMenu extends React.Component<FilterMenuProps, any> {
    static defaultProps: {
        handleFilter(): void;
        column: any;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    setSelectedKeys: ({ selectedKeys }: {
        selectedKeys: any;
    }) => void;
    handleClearFilters: () => void;
    handleConfirm: () => void;
    onVisibleChange: (visible: any) => void;
    confirmFilter(): void;
    renderMenuItem(item: any): JSX.Element;
    renderMenus(items: any): any;
    handleMenuItemClick: (info: any) => void;
    render(): JSX.Element;
}
