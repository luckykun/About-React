import React from 'react';
export interface PopconfirmProps {
    /**
     * Position of popup-container, options:`top`, `left`, `right`, `bottom`
     */
    placement?: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
    /** Description of Popconfirm */
    title: React.ReactNode | string;
    /** Callback when confirm */
    onConfirm?: () => void;
    /** Callback when cancel */
    onCancel?: () => void;
    /** Callback when display/hide */
    onVisibleChange?: (visible: boolean) => void;
    /** Confirm button text */
    okText?: React.ReactNode;
    /** Cancel button text */
    cancelText?: React.ReactNode;
    style?: React.CSSProperties;
    transitionName?: string;
    trigger?: 'hover' | 'focus' | 'click';
    /** Style of overlay */
    overlayStyle?: React.CSSProperties;
    prefixCls?: string;
    openClassName?: string;
    arrowPointAtCenter?: boolean;
}
export interface PopconfirmContext {
    antLocale?: {
        Popconfirm?: any;
    };
}
export default class Popconfirm extends React.Component<PopconfirmProps, any> {
    static defaultProps: {
        prefixCls: string;
        transitionName: string;
        placement: string;
        trigger: string;
        onConfirm: () => void;
        onCancel: () => void;
        onVisibleChange: () => void;
    };
    static contextTypes: {
        antLocale: React.Requireable<any>;
    };
    context: PopconfirmContext;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    confirm: () => void;
    cancel: () => void;
    onVisibleChange: (visible: any) => void;
    setVisible(visible: any): void;
    render(): JSX.Element;
}
