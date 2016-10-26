import React from 'react';
export interface RadioProps {
    /** 指定当前是否选中*/
    checked?: boolean;
    /** 初始是否选中*/
    defaultChecked?: boolean;
    /** 根据 value 进行比较，判断是否选中  */
    value?: string | number;
    style?: React.CSSProperties;
    prefixCls?: string;
    disabled?: boolean;
    className?: string;
    onChange?: (e: any) => any;
}
export default class Radio extends React.Component<RadioProps, any> {
    static Group: any;
    static Button: any;
    static defaultProps: {
        prefixCls: string;
    };
    shouldComponentUpdate(...args: any[]): any;
    render(): JSX.Element;
}
