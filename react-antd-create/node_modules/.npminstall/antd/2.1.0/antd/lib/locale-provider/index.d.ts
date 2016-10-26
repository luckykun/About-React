import React from 'react';
export interface LocaleProviderProps {
    locale: {
        Pagination?: Object;
        DatePicker?: Object;
        TimePicker?: Object;
        Calendar?: Object;
        Table?: Object;
        Modal?: Object;
        Popconfirm?: Object;
        Transfer?: Object;
        Select?: Object;
    };
}
export default class LocaleProvider extends React.Component<LocaleProviderProps, any> {
    static propTypes: {
        locale: React.Requireable<any>;
    };
    static childContextTypes: {
        antLocale: React.Requireable<any>;
    };
    getChildContext(): {
        antLocale: {
            Pagination?: Object;
            DatePicker?: Object;
            TimePicker?: Object;
            Calendar?: Object;
            Table?: Object;
            Modal?: Object;
            Popconfirm?: Object;
            Transfer?: Object;
            Select?: Object;
        };
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnMount(): void;
    render(): React.ReactElement<any>;
}
