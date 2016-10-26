import React from 'react';
export interface RadioGroupProps {
    /** 选项变化时的回调函数*/
    onChange?: React.FormEventHandler;
    /** 用于设置当前选中的值*/
    value?: string | number;
    /** 默认选中的值*/
    defaultValue?: string | number;
    /**  大小，只对按钮样式生效*/
    size?: 'large' | 'default' | 'small';
    style?: React.CSSProperties;
    prefixCls?: string;
    disabled?: boolean;
}
export default class RadioGroup extends React.Component<RadioGroupProps, any> {
    static defaultProps: {
        prefixCls: string;
        disabled: boolean;
        onChange(): void;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    shouldComponentUpdate(...args: any[]): any;
    onRadioChange: (ev: any) => void;
    render(): JSX.Element;
}
