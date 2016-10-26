import React from 'react';
export interface BackTopProps {
    visibilityHeight?: number;
    onClick?: (event) => void;
    target?: () => HTMLElement | Window;
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
}
export default class BackTop extends React.Component<BackTopProps, any> {
    static defaultProps: {
        onClick(): void;
        visibilityHeight: number;
        target(): Window;
        prefixCls: string;
    };
    scrollEvent: any;
    constructor(props: any);
    scrollToTop: (e: any) => void;
    setScrollTop(value: any): void;
    handleScroll: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
