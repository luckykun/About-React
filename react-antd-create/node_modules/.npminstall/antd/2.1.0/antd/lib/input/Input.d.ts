import React from 'react';
import { Component } from 'react';
export interface AutoSizeType {
    minRows?: number;
    maxRows?: number;
}
export interface InputProps {
    prefixCls?: string;
    className?: string;
    type?: string;
    id?: number | string;
    value?: any;
    defaultValue?: any;
    placeholder?: string;
    size?: 'large' | 'default' | 'small';
    disabled?: boolean;
    readOnly?: boolean;
    addonBefore?: React.ReactNode;
    addonAfter?: React.ReactNode;
    onPressEnter?: React.FormEventHandler;
    onKeyDown?: React.FormEventHandler;
    onChange?: React.FormEventHandler;
    onClick?: React.FormEventHandler;
    onBlur?: React.FormEventHandler;
    autosize?: boolean | AutoSizeType;
    autoComplete?: 'on' | 'off';
    style?: React.CSSProperties;
}
export default class Input extends Component<InputProps, any> {
    static Group: any;
    static defaultProps: {
        disabled: boolean;
        prefixCls: string;
        type: string;
        onPressEnter(): void;
        onKeyDown(): void;
        onChange(): void;
        autosize: boolean;
    };
    static propTypes: {
        type: React.Requireable<any>;
        id: React.Requireable<any>;
        size: React.Requireable<any>;
        disabled: React.Requireable<any>;
        value: React.Requireable<any>;
        defaultValue: React.Requireable<any>;
        className: React.Requireable<any>;
        addonBefore: React.Requireable<any>;
        addonAfter: React.Requireable<any>;
        prefixCls: React.Requireable<any>;
        autosize: React.Requireable<any>;
        onPressEnter: React.Requireable<any>;
        onKeyDown: React.Requireable<any>;
    };
    nextFrameActionId: number;
    refs: {
        [key: string]: any;
        input: any;
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    handleKeyDown: (e: any) => void;
    handleTextareaChange: (e: any) => void;
    resizeTextarea: () => void;
    renderLabledInput(children: any): JSX.Element;
    renderInput(): any;
    render(): JSX.Element;
}
