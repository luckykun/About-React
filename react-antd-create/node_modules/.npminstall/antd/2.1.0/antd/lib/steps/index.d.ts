import React from 'react';
export interface StepsProps {
    prefixCls?: string;
    iconPrefix?: string;
    current?: number;
    status?: 'wait' | 'process' | 'finish' | 'error';
    size?: 'default' | 'small';
    direction?: 'horizontal' | 'vertical';
}
export default class Steps extends React.Component<StepsProps, any> {
    static Step: any;
    static defaultProps: {
        prefixCls: string;
        iconPrefix: string;
        current: number;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        iconPrefix: React.Requireable<any>;
        current: React.Requireable<any>;
    };
    render(): JSX.Element;
}
