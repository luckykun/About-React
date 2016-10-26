import React from 'react';
export interface RateProps {
    prefixCls?: string;
    count?: number;
    value?: number;
    defaultValue?: number;
    allowHalf?: boolean;
    disabled?: boolean;
    onChange?: (value: number) => any;
}
export default class Rate extends React.Component<RateProps, any> {
    static propTypes: {
        prefixCls: React.Requireable<any>;
    };
    static defaultProps: {
        prefixCls: string;
    };
    render(): JSX.Element;
}
