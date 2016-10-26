import React from 'react';
import { Component } from 'react';
export default class ScrollNumber extends Component<any, any> {
    static defaultProps: {
        prefixCls: string;
        count: any;
        component: string;
        onAnimated(): void;
        height: number;
    };
    static propTypes: {
        count: React.Requireable<any>;
        component: React.Requireable<any>;
        onAnimated: React.Requireable<any>;
        height: React.Requireable<any>;
    };
    lastCount: any;
    constructor(props: any);
    componentDidMount(): void;
    getPositionByNum(num: any, i: any): any;
    componentWillReceiveProps(nextProps: any): void;
    renderNumberList(position: any): any[];
    renderCurrentNumber(num: any, i: any): React.DOMElement<{}, Element>;
    renderNumberElement(): any;
    render(): React.DOMElement<{}, Element>;
}
