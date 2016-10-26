import React from 'react';
export interface HeaderProps {
    prefixCls?: string;
    locale?: any;
    fullscreen?: boolean;
    yearSelectOffset?: number;
    yearSelectTotal?: number;
    type?: string;
    onValueChange?: (value) => void;
    onTypeChange?: (type: string) => void;
    value: any;
}
export default class Header extends React.Component<HeaderProps, any> {
    static defaultProps: {
        prefixCls: string;
        yearSelectOffset: number;
        yearSelectTotal: number;
        onValueChange: () => void;
        onTypeChange: () => void;
    };
    static propTypes: {
        value: React.Requireable<any>;
        locale: React.Requireable<any>;
        yearSelectOffset: React.Requireable<any>;
        yearSelectTotal: React.Requireable<any>;
        onValueChange: React.Requireable<any>;
        onTypeChange: React.Requireable<any>;
        prefixCls: React.Requireable<any>;
        selectPrefixCls: React.Requireable<any>;
        type: React.Requireable<any>;
        fullscreen: React.Requireable<any>;
    };
    getYearSelectElement(year: any): JSX.Element;
    getMonthsLocale(value: any): any[];
    getMonthSelectElement(month: any, months: any): JSX.Element;
    onYearChange: (year: any) => void;
    onMonthChange: (month: any) => void;
    onTypeChange: (e: any) => void;
    render(): JSX.Element;
}
