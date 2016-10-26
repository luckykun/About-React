import React from 'react';
export interface SliderMarks {
    [key: number]: React.ReactNode | {
        style: React.CSSProperties;
        label: React.ReactNode;
    };
}
export declare type SliderValue = number | [number, number];
export interface SliderProps {
    range?: boolean;
    min?: number;
    max?: number;
    step?: number | void;
    marks?: SliderMarks;
    dots?: boolean;
    value?: SliderValue;
    defaultValue?: SliderValue;
    included?: boolean;
    disabled?: boolean;
    onChange?: (value: SliderValue) => void;
    onAfterChange?: (value: SliderValue) => void;
    tipFormatter?: void | ((value: number) => React.ReactNode);
}
export default class Slider extends React.Component<SliderProps, any> {
    static defaultProps: {
        prefixCls: string;
        tooltipPrefixCls: string;
        tipTransitionName: string;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        tipTransitionName: React.Requireable<any>;
    };
    render(): JSX.Element;
}
