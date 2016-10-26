import React from 'react';
import moment from 'moment';
export interface CalendarContext {
    antLocale?: {
        Calendar?: any;
    };
}
export interface CalendarProps {
    prefixCls?: string;
    className?: string;
    value?: moment.Moment;
    defaultValue?: moment.Moment;
    mode?: 'month' | 'year';
    fullscreen?: boolean;
    dateCellRender?: (date: moment.Moment) => React.ReactNode;
    monthCellRender?: (date: moment.Moment) => React.ReactNode;
    locale?: any;
    style?: React.CSSProperties;
    onPanelChange?: (date: moment.Moment, mode: string) => void;
}
export default class Calendar extends React.Component<CalendarProps, any> {
    static defaultProps: {
        monthCellRender: () => any;
        dateCellRender: () => any;
        locale: {};
        fullscreen: boolean;
        prefixCls: string;
        onPanelChange: () => any;
        mode: string;
    };
    static propTypes: {
        monthCellRender: React.Requireable<any>;
        dateCellRender: React.Requireable<any>;
        fullscreen: React.Requireable<any>;
        locale: React.Requireable<any>;
        prefixCls: React.Requireable<any>;
        className: React.Requireable<any>;
        style: React.Requireable<any>;
        onPanelChange: React.Requireable<any>;
        value: React.Requireable<any>;
    };
    static contextTypes: {
        antLocale: React.Requireable<any>;
    };
    context: CalendarContext;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    monthCellRender: (value: any) => JSX.Element;
    dateCellRender: (value: any) => JSX.Element;
    setValue: (value: any) => void;
    setType: (type: any) => void;
    render(): JSX.Element;
}
