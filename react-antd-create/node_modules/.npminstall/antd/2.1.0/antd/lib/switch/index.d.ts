import React from 'react';
export interface SwitchProps {
    prefixCls?: string;
    size?: 'small' | 'default';
    className?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => any;
    checkedChildren?: React.ReactNode;
    unCheckedChildren?: React.ReactNode;
}
export default class Switch extends React.Component<SwitchProps, any> {
    static defaultProps: {
        prefixCls: string;
        size: string;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        size: React.Requireable<any>;
        className: React.Requireable<any>;
    };
    render(): JSX.Element;
}
