import React from 'react';
export interface SelectParam {
    key: string;
    keyPath: Array<string>;
    item: any;
    domEvent: any;
    selectedKeys: Array<string>;
}
export interface ClickParam {
    key: string;
    keyPath: Array<string>;
    item: any;
    domEvent: any;
}
export interface MenuProps {
    id?: string;
    /** 主题颜色*/
    theme?: 'light' | 'dark';
    /** 菜单类型  enum: `vertical` `horizontal` `inline`*/
    mode?: 'vertical' | 'horizontal' | 'inline';
    /** 当前选中的菜单项 key 数组*/
    selectedKeys?: Array<string>;
    /** 初始选中的菜单项 key 数组*/
    defaultSelectedKeys?: Array<string>;
    /** 当前展开的菜单项 key 数组*/
    openKeys?: Array<string>;
    /** 初始展开的菜单项 key 数组*/
    defaultOpenKeys?: Array<string>;
    onOpenChange?: (openKeys: string[]) => void;
    /**
     * 被选中时调用
     *
     * @type {(item: any, key: string, selectedKeys: Array<string>) => void}
     */
    onSelect?: (param: SelectParam) => void;
    /** 取消选中时调用*/
    onDeselect?: (param: SelectParam) => void;
    /** 点击 menuitem 调用此函数*/
    onClick?: (param: ClickParam) => void;
    /** 根节点样式*/
    style?: React.CSSProperties;
    openAnimation?: string | Object;
    openTransitionName?: string | Object;
    className?: string;
    prefixCls?: string;
}
export default class Menu extends React.Component<MenuProps, any> {
    static Divider: any;
    static Item: any;
    static SubMenu: any;
    static ItemGroup: any;
    static defaultProps: {
        prefixCls: string;
        onClick: () => void;
        onOpenChange: () => void;
        className: string;
        theme: string;
    };
    switchModeFromInline: boolean;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    handleClick: (e: any) => void;
    handleOpenChange: (openKeys: string[]) => void;
    setOpenKeys(openKeys: any): void;
    render(): JSX.Element;
}
