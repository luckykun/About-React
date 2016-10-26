import React from 'react';
export interface DropdownButtonProps {
    type?: 'primary' | 'ghost' | 'dash';
    onClick?: React.FormEventHandler;
    trigger?: 'click' | 'hover';
    overlay: React.ReactNode;
    visible?: boolean;
    disabled?: boolean;
    onVisibleChange?: (visible: boolean) => void;
    style?: React.CSSProperties;
    prefixCls?: string;
}
export default class DropdownButton extends React.Component<DropdownButtonProps, any> {
    static defaultProps: {
        align: {
            points: string[];
            overlay: {
                adjustX: number;
                adjustY: number;
            };
            offset: number[];
            targetOffset: number[];
        };
        type: string;
        prefixCls: string;
    };
    render(): JSX.Element;
}
