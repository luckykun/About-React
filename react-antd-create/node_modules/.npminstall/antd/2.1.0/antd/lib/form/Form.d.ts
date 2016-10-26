import React from 'react';
import FormItem from './FormItem';
export interface FormCreateOption {
    onFieldsChange?: (props: any, fields: Array<any>) => void;
    mapPropsToFields?: (props: any) => void;
    withRef?: boolean;
}
export interface FormProps {
    horizontal?: boolean;
    inline?: boolean;
    vertical?: boolean;
    form?: WrappedFormUtils;
    onSubmit?: React.FormEventHandler;
    style?: React.CSSProperties;
    className?: string;
    prefixCls?: string;
}
export declare type WrappedFormUtils = {
    /** 获取一组输入控件的值，如不传入参数，则获取全部组件的值 */
    getFieldsValue(fieldNames?: Array<string>): Object;
    /** 获取一个输入控件的值*/
    getFieldValue(fieldName: string): any;
    /** 设置一组输入控件的值*/
    setFieldsValue(obj: Object): void;
    /** 设置一组输入控件的值*/
    setFields(obj: Object): void;
    /** 校验并获取一组输入域的值与 Error */
    validateFields(fieldNames: Array<string>, options: Object, callback: (erros: any, values: any) => void): any;
    validateFields(fieldNames: Array<string>, callback: (erros: any, values: any) => void): any;
    validateFields(options: Object, callback: (erros: any, values: any) => void): any;
    validateFields(callback: (erros: any, values: any) => void): any;
    /** 与 `validateFields` 相似，但校验完后，如果校验不通过的菜单域不在可见范围内，则自动滚动进可见范围 */
    validateFieldsAndScroll(fieldNames?: Array<string>, options?: Object, callback?: (erros: any, values: any) => void): void;
    /** 获取某个输入控件的 Error */
    getFieldError(name: string): Object[];
    /** 判断一个输入控件是否在校验状态*/
    isFieldValidating(name: string): boolean;
    /** 重置一组输入控件的值与状态，如不传入参数，则重置所有组件 */
    resetFields(names?: Array<string>): void;
    getFieldDecorator(id: string, options: {
        /** 子节点的值的属性，如 Checkbox 的是 'checked' */
        valuePropName?: string;
        /** 子节点的初始值，类型、可选值均由子节点决定 */
        initialValue?: any;
        /** 收集子节点的值的时机 */
        trigger?: string;
        /** 可以把 onChange 的参数转化为控件的值，例如 DatePicker 可设为：(date, dateString) => dateString */
        getValueFromEvent?: (...args) => any;
        /** 校验子节点值的时机 */
        validateTrigger?: string;
        /** 校验规则，参见 [async-validator](https://github.com/yiminghe/async-validator) */
        rules?: Array<any>;
        /** 是否和其他控件互斥，特别用于 Radio 单选控件 */
        exclusive?: boolean;
    }): (node: React.ReactNode) => React.ReactNode;
};
export interface FormComponentProps {
    form?: WrappedFormUtils;
}
export declare class FormComponent extends React.Component<FormComponentProps, {}> {
}
export interface ComponentDecorator {
    <T extends (typeof FormComponent)>(component: T): T;
}
export default class Form extends React.Component<FormProps, any> {
    static defaultProps: {
        prefixCls: string;
        onSubmit(e: any): void;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        vertical: React.Requireable<any>;
        horizontal: React.Requireable<any>;
        inline: React.Requireable<any>;
        children: React.Requireable<any>;
        onSubmit: React.Requireable<any>;
    };
    static Item: typeof FormItem;
    static create: (options?: FormCreateOption) => ComponentDecorator;
    constructor(props: any);
    shouldComponentUpdate(...args: any[]): any;
    render(): JSX.Element;
}
