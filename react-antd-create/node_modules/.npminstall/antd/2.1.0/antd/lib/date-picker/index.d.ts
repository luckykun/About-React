import React from 'react';
import moment from 'moment';
import { TimePickerProps } from '../time-picker';
export interface PickerProps {
    format?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    popupStyle?: React.CSSProperties;
    locale?: any;
    size?: 'large' | 'small' | 'default';
    getCalendarContainer?: (trigger) => React.ReactNode;
    prefixCls?: string;
    inputPrefixCls?: string;
}
export interface SinglePickerProps {
    value?: moment.Moment;
    defaultValue?: moment.Moment;
    defaultPickerValue?: moment.Moment;
    onChange?: (date: moment.Moment, dateString: string) => void;
}
export interface DatePickerProps extends PickerProps, SinglePickerProps {
    showTime?: TimePickerProps | boolean;
    open?: boolean;
    toggleOpen?: (e: {
        open: boolean;
    }) => void;
}
declare const DatePicker: React.ClassicComponentClass<DatePickerProps>;
export interface MonthPickerProps extends PickerProps, SinglePickerProps {
}
export interface RangePickerProps extends PickerProps {
    value?: [moment.Moment, moment.Moment];
    defaultValue?: [moment.Moment, moment.Moment];
    defaultPickerValue?: [moment.Moment, moment.Moment];
    onChange?: (dates: [moment.Moment, moment.Moment], dateStrings: [string, string]) => void;
    showTime?: TimePickerProps | boolean;
}
export default DatePicker;
