import React from 'react';
export interface BreadcrumbItemProps {
    separator?: React.ReactNode;
    href?: string;
}
export default class BreadcrumbItem extends React.Component<BreadcrumbItemProps, any> {
    static defaultProps: {
        prefixCls: string;
        separator: string;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        separator: React.Requireable<any>;
        href: React.Requireable<any>;
    };
    render(): JSX.Element;
}
