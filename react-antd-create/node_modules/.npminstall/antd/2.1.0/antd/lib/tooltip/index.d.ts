import React from 'react';
export declare type PopoverPlacement = 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
export interface TooltipProps {
    /**
      气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft`
      `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom`
    */
    placement?: PopoverPlacement;
    /** 提示文字 */
    title: React.ReactNode;
    style?: React.CSSProperties;
    builtinPlacements?: Object;
    /** Style of overlay */
    overlayStyle?: React.CSSProperties;
    prefixCls?: string;
    /** Callback when display/hide */
    onVisibleChange?: (visible: boolean) => void;
    transitionName?: string;
    visible?: boolean;
    trigger?: 'hover' | 'focus' | 'click';
    overlay?: React.ReactNode;
    openClassName?: string;
    arrowPointAtCenter?: boolean;
    getTooltipContainer?: (triggerNode: React.ReactNode) => HTMLElement;
}
export default class Tooltip extends React.Component<TooltipProps, any> {
    static defaultProps: {
        prefixCls: string;
        placement: string;
        transitionName: string;
        mouseEnterDelay: number;
        mouseLeaveDelay: number;
        onVisibleChange(): void;
        arrowPointAtCenter: boolean;
    };
    refs: {
        [key: string]: any;
        tooltip: any;
    };
    constructor(props: any);
    onVisibleChange: (visible: any) => void;
    getPopupDomNode(): any;
    getPlacements(): any;
    onPopupAlign: (domNode: any, align: any) => void;
    render(): JSX.Element;
}
