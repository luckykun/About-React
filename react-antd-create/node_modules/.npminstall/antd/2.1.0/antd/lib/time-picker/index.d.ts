import React from 'react';
import moment from 'moment';
export interface TimePickerProps {
    className?: string;
    size?: 'large' | 'default' | 'small';
    /** 默认时间 */
    value?: moment.Moment;
    /** 初始默认时间 */
    defaultValue?: moment.Moment;
    /** 展示的时间格式 : "HH:mm:ss"、"HH:mm"、"mm:ss" */
    format?: string;
    /** 时间发生变化的回调 */
    onChange?: (time: moment.Moment, timeString: string) => void;
    /** 禁用全部操作 */
    disabled?: boolean;
    /** 没有值的时候显示的内容 */
    placeholder?: string;
    /** 隐藏禁止选择的选项 */
    hideDisabledOptions?: boolean;
    /** 禁止选择部分小时选项 */
    disabledHours?: Function;
    /** 禁止选择部分分钟选项 */
    disabledMinutes?: Function;
    /** 禁止选择部分秒选项 */
    disabledSeconds?: Function;
    style?: React.CSSProperties;
    getPopupContainer?: (trigger: any) => any;
}
export interface TimePickerContext {
    antLocale?: {
        TimePicker?: any;
    };
}
export default class TimePicker extends React.Component<TimePickerProps, any> {
    static defaultProps: {
        format: string;
        prefixCls: string;
        onChange(): void;
        align: {
            offset: number[];
        };
        disabled: boolean;
        disabledHours: any;
        disabledMinutes: any;
        disabledSeconds: any;
        hideDisabledOptions: boolean;
        placement: string;
        transitionName: string;
    };
    static contextTypes: {
        antLocale: React.Requireable<any>;
    };
    context: TimePickerContext;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    handleChange: (value: moment.Moment) => void;
    getLocale(): any;
    render(): JSX.Element;
}
