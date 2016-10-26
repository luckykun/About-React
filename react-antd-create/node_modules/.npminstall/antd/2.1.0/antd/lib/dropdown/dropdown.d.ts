import React from 'react';
export interface DropDownProps {
    trigger?: Array<'click' | 'hover'>;
    overlay: React.ReactNode;
    style?: React.CSSProperties;
    onVisibleChange?: (e: {
        visible: boolean;
    }) => void;
    visible?: boolean;
    align?: Object;
    getPopupContainer?: () => HTMLElement;
}
export default class Dropdown extends React.Component<DropDownProps, any> {
    static Button: React.ReactNode;
    static defaultProps: {
        transitionName: string;
        prefixCls: string;
        mouseEnterDelay: number;
        mouseLeaveDelay: number;
    };
    render(): JSX.Element;
}
