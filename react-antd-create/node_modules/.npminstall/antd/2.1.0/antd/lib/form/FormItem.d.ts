import React from 'react';
import { WrappedFormUtils } from './Form';
export interface FormItemLabelColOption {
    span: number;
    offset?: number;
}
export interface FormItemProps {
    prefixCls?: string;
    id?: string;
    label?: string | React.ReactNode;
    labelCol?: FormItemLabelColOption;
    wrapperCol?: FormItemLabelColOption;
    help?: React.ReactNode;
    extra?: string;
    validateStatus?: 'success' | 'warning' | 'error' | 'validating';
    hasFeedback?: boolean;
    className?: string;
    required?: boolean;
    style?: React.CSSProperties;
    colon?: boolean;
}
export interface FormItemContext {
    form: WrappedFormUtils;
}
export default class FormItem extends React.Component<FormItemProps, any> {
    static defaultProps: {
        hasFeedback: boolean;
        prefixCls: string;
        colon: boolean;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        label: React.Requireable<any>;
        labelCol: React.Requireable<any>;
        help: React.Requireable<any>;
        validateStatus: React.Requireable<any>;
        hasFeedback: React.Requireable<any>;
        wrapperCol: React.Requireable<any>;
        className: React.Requireable<any>;
        id: React.Requireable<any>;
        children: React.Requireable<any>;
        colon: React.Requireable<any>;
    };
    static contextTypes: {
        form: React.Requireable<any>;
    };
    context: FormItemContext;
    shouldComponentUpdate(...args: any[]): any;
    getHelpMsg(): React.ReactElement<any> | string | number | {} | (React.ReactElement<any> | string | number | any[] | boolean)[] | boolean;
    getOnlyControl(): React.ReactElement<any> | string | number;
    getChildProp(prop: any): any;
    getId(): any;
    getMeta(): any;
    renderHelp(): JSX.Element;
    renderExtra(): JSX.Element;
    getValidateStatus(): string;
    renderValidateWrapper(c1: any, c2: any, c3: any): JSX.Element;
    renderWrapper(children: any): JSX.Element;
    isRequired(): any;
    renderLabel(): JSX.Element;
    renderChildren(): JSX.Element[];
    renderFormItem(children: any): JSX.Element;
    render(): JSX.Element;
}
