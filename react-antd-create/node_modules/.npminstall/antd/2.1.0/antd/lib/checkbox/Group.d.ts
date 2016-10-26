import React from 'react';
export interface CheckboxOptionType {
    label: string;
    value: string;
    disabled?: boolean;
}
export interface CheckboxGroupProps {
    /** 默认选中的选项 */
    defaultValue?: Array<string>;
    /** 指定选中的选项 */
    value?: Array<string>;
    /** 指定可选项 */
    options?: Array<CheckboxOptionType> | Array<string>;
    /** 变化时回调函数 */
    onChange?: (checkedValue: Array<string>) => void;
    disabled?: boolean;
    style?: React.CSSProperties;
    prefixCls?: string;
}
export interface CheckboxGroupState {
    value: any;
}
export default class CheckboxGroup extends React.Component<CheckboxGroupProps, CheckboxGroupState> {
    static defaultProps: {
        options: any[];
        onChange(): void;
        prefixCls: string;
    };
    static propTypes: {
        defaultValue: React.Requireable<any>;
        value: React.Requireable<any>;
        options: React.Validator<any>;
        onChange: React.Requireable<any>;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    shouldComponentUpdate(...args: any[]): any;
    getOptions(): any[];
    toggleOption: (option: any) => void;
    render(): JSX.Element;
}
