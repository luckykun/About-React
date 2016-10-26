import React from 'react';
export declare type ButtonType = 'primary' | 'ghost' | 'dashed';
export declare type ButtonShape = 'circle' | 'circle-outline';
export declare type ButtonSize = 'small' | 'large';
export interface ButtonProps {
    type?: ButtonType;
    htmlType?: string;
    icon?: string;
    shape?: ButtonShape;
    size?: ButtonSize;
    onClick?: React.FormEventHandler;
    onMouseUp?: React.FormEventHandler;
    loading?: boolean;
    disabled?: boolean;
    style?: React.CSSProperties;
    prefixCls?: string;
    className?: string;
}
export default class Button extends React.Component<ButtonProps, any> {
    static Group: any;
    static defaultProps: {
        prefixCls: string;
        onClick(): void;
        loading: boolean;
    };
    static propTypes: {
        type: React.Requireable<any>;
        shape: React.Requireable<any>;
        size: React.Requireable<any>;
        htmlType: React.Requireable<any>;
        onClick: React.Requireable<any>;
        loading: React.Requireable<any>;
        className: React.Requireable<any>;
        icon: React.Requireable<any>;
    };
    timeout: any;
    clickedTimeout: any;
    componentWillUnmount(): void;
    clearButton: (button: any) => void;
    handleClick: (e: any) => void;
    handleMouseUp: (e: any) => void;
    render(): JSX.Element;
}
