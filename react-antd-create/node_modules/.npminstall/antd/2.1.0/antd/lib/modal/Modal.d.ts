import React from 'react';
export interface ModalProps {
    /** 对话框是否可见*/
    visible?: boolean;
    /** 确定按钮 loading*/
    confirmLoading?: boolean;
    /** 标题*/
    title?: React.ReactNode | string;
    /** 是否显示右上角的关闭按钮*/
    closable?: boolean;
    /** 点击确定回调*/
    onOk?: () => void;
    /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调*/
    onCancel?: (e: React.MouseEvent) => void;
    /** 宽度*/
    width?: string | number;
    /** 底部内容*/
    footer?: React.ReactNode;
    /** 确认按钮文字*/
    okText?: string;
    /** 取消按钮文字*/
    cancelText?: string;
    /** 点击蒙层是否允许关闭*/
    maskClosable?: boolean;
    style?: React.CSSProperties;
    wrapClassName?: string;
    maskTransitionName?: string;
    transitionName?: string;
    className?: string;
}
export interface ModalContext {
    antLocale?: {
        Modal?: any;
    };
}
export default class Modal extends React.Component<ModalProps, any> {
    static info: any;
    static success: any;
    static error: any;
    static warn: any;
    static warning: any;
    static confirm: any;
    static defaultProps: {
        prefixCls: string;
        onOk: () => void;
        onCancel: () => void;
        width: number;
        transitionName: string;
        maskTransitionName: string;
        confirmLoading: boolean;
        visible: boolean;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        onOk: React.Requireable<any>;
        onCancel: React.Requireable<any>;
        okText: React.Requireable<any>;
        cancelText: React.Requireable<any>;
        width: React.Requireable<any>;
        confirmLoading: React.Requireable<any>;
        visible: React.Requireable<any>;
        align: React.Requireable<any>;
        footer: React.Requireable<any>;
        title: React.Requireable<any>;
        closable: React.Requireable<any>;
    };
    static contextTypes: {
        antLocale: React.Requireable<any>;
    };
    context: ModalContext;
    handleCancel: (e: any) => void;
    handleOk: () => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
