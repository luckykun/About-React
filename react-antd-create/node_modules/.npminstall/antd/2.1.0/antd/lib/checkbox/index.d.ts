import React from 'react';
import CheckboxGroup from './Group';
export interface CheckboxProps {
    /** 指定当前是否选中 */
    checked?: boolean;
    /** 初始是否选中 */
    defaultChecked?: boolean;
    /** indeterminate 状态，只负责样式控制 */
    indeterminate?: boolean;
    /** 变化时回调函数 */
    onChange?: React.FormEventHandler;
    style?: React.CSSProperties;
    disabled?: boolean;
    className?: string;
}
export default class Checkbox extends React.Component<CheckboxProps, any> {
    static Group: typeof CheckboxGroup;
    static defaultProps: {
        prefixCls: string;
        indeterminate: boolean;
    };
    shouldComponentUpdate(...args: any[]): any;
    render(): JSX.Element;
}
