import React from 'react';
export interface BreadcrumbProps {
    prefixCls?: string;
    routes?: Array<any>;
    params?: Object;
    separator?: string | React.ReactNode;
    itemRender?: (route, params, routes, paths) => React.ReactNode;
    style?: React.CSSProperties;
}
export default class Breadcrumb extends React.Component<BreadcrumbProps, any> {
    static Item: any;
    static defaultProps: {
        prefixCls: string;
        separator: string;
        itemRender: (route: any, params: any, routes: any, paths: any) => JSX.Element;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        separator: React.Requireable<any>;
        routes: React.Requireable<any>;
        params: React.Requireable<any>;
        linkRender: React.Requireable<any>;
        nameRender: React.Requireable<any>;
    };
    constructor(props: any);
    render(): JSX.Element;
}
