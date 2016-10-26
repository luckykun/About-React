import React from 'react';
export interface PaginationProps {
    /** 当前页数*/
    current?: number;
    /** 默认的当前页数*/
    defaultCurrent?: number;
    /** 数据总数*/
    total: number;
    /** 初始的每页条数*/
    defaultPageSize?: number;
    /** 每页条数*/
    pageSize?: number;
    /** 页码改变的回调，参数是改变后的页码*/
    onChange?: (page: number) => void;
    /** 是否可以改变 pageSize */
    showSizeChanger?: boolean;
    /** 指定每页可以显示多少条*/
    pageSizeOptions?: Array<string>;
    /** pageSize 变化的回调  */
    onShowSizeChange?: (current: number, size: number) => void;
    /** 是否可以快速跳转至某页*/
    showQuickJumper?: boolean;
    /** 当为「small」时，是小尺寸分页 */
    size?: string;
    /** 当添加该属性时，显示为简单分页*/
    simple?: Object;
    /** 用于显示总共有多少条数据*/
    showTotal?: (total: number) => React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    locale?: Object;
    prefixCls?: string;
    selectPrefixCls?: string;
}
export interface PaginationContext {
    antLocale?: {
        Pagination?: any;
    };
}
export default class Pagination extends React.Component<PaginationProps, any> {
    static defaultProps: {
        locale: any;
        className: string;
        prefixCls: string;
        selectPrefixCls: string;
    };
    static contextTypes: {
        antLocale: React.Requireable<any>;
    };
    context: PaginationContext;
    render(): JSX.Element;
}
