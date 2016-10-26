import React from 'react';
export interface PopoverProps {
    /** trigger type, options: `hover` `focus` `click` */
    trigger?: 'hover' | 'focus' | 'click';
    /** Position of popup-container,
    * options: `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight`
    * `leftTop` `leftBottom` `rightTop` `rightBottom`
    */
    placement?: 'top' | 'left' | 'right' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
    /** title of popup-container */
    title?: React.ReactNode | string;
    /** classname of popup-container */
    overlayClassName?: string;
    /** Style of overlay */
    overlayStyle?: React.CSSProperties;
    prefixCls?: string;
    /** to control visibility of popup-container */
    visible?: boolean;
    /** callback when visible change */
    onVisibleChange?: (visible: boolean) => void;
    /** specify wrapper of popup-container */
    getTooltipContainer?: (triggerNode: React.ReactNode) => HTMLElement;
    /** content of popup-container */
    content?: React.ReactNode | string;
    style?: React.CSSProperties;
    transitionName?: string;
    openClassName?: string;
    arrowPointAtCenter?: boolean;
}
export default class Popover extends React.Component<PopoverProps, any> {
    static defaultProps: {
        prefixCls: string;
        placement: string;
        transitionName: string;
        trigger: string;
        mouseEnterDelay: number;
        mouseLeaveDelay: number;
        overlayStyle: {};
    };
    render(): JSX.Element;
    getPopupDomNode(): any;
    getOverlay(): JSX.Element;
}
