import React from 'react';
export interface ProgressProps {
    type?: 'line' | 'circle';
    percent?: number;
    format?: (percent: number) => string;
    status?: 'success' | 'active' | 'exception';
    showInfo?: boolean;
    strokeWidth?: number;
    width?: number;
    style?: React.CSSProperties;
}
export default class Progress extends React.Component<ProgressProps, any> {
    static Line: any;
    static Circle: any;
    static defaultProps: {
        type: string;
        percent: number;
        showInfo: boolean;
        trailColor: string;
        prefixCls: string;
    };
    static propTypes: {
        status: React.Requireable<any>;
        type: React.Requireable<any>;
        showInfo: React.Requireable<any>;
        percent: React.Requireable<any>;
        width: React.Requireable<any>;
        strokeWidth: React.Requireable<any>;
        trailColor: React.Requireable<any>;
        format: React.Requireable<any>;
    };
    render(): JSX.Element;
}
