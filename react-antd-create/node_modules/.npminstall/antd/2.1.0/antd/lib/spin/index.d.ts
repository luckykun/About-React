import React from 'react';
export interface SpinProps {
    prefixCls?: string;
    className?: string;
    spinning?: boolean;
    size?: 'small' | 'default' | 'large';
    tip?: string;
}
export default class Spin extends React.Component<SpinProps, any> {
    static defaultProps: {
        prefixCls: string;
        spinning: boolean;
        size: string;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        className: React.Requireable<any>;
        spinning: React.Requireable<any>;
        size: React.Requireable<any>;
    };
    debounceTimeout: number;
    constructor(props: any);
    isNestedPattern(): boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}
