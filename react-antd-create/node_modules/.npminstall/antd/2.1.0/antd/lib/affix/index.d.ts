import React from 'react';
export interface AffixProps {
    /**
     * 距离窗口顶部达到指定偏移量后触发
     */
    offsetTop?: number;
    offset?: number;
    /** 距离窗口底部达到指定偏移量后触发 */
    offsetBottom?: number;
    style?: React.CSSProperties;
    /** 固定状态改变时触发的回调函数 */
    onChange?: (affixed?: boolean) => any;
    /** 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
    target?: () => Window | HTMLElement;
    prefixCls?: string;
}
export default class Affix extends React.Component<AffixProps, any> {
    static propTypes: {
        offsetTop: React.Requireable<any>;
        offsetBottom: React.Requireable<any>;
        target: React.Requireable<any>;
    };
    static defaultProps: {
        target(): Window;
        onChange(): void;
        prefixCls: string;
    };
    scrollEvent: any;
    resizeEvent: any;
    refs: {
        [key: string]: any;
        fixedNode: HTMLElement;
    };
    constructor(props: any);
    setAffixStyle(e: any, affixStyle: any): void;
    setPlaceholderStyle(e: any, placeholderStyle: any): void;
    updatePosition: (e: any) => void;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    setTargetEventListeners(getTarget: any): void;
    clearScrollEventListeners(): void;
    render(): JSX.Element;
}
