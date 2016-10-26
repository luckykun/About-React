import React from 'react';
export default class RangePicker extends React.Component<any, any> {
    static defaultProps: {
        prefixCls: string;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    clearSelection: (e: any) => void;
    handleChange: (value: any) => void;
    render(): JSX.Element;
}
