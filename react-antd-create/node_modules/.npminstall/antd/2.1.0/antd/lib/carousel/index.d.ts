import React from 'react';
export declare type CarouselEffect = 'scrollx' | 'fade';
export interface CarouselProps {
    /** 动画效果函数，可取 scrollx, fade */
    effect?: CarouselEffect;
    /** 是否显示面板指示点 */
    dots?: boolean;
    /** 垂直显示 */
    vertical?: boolean;
    /** 是否自动切换 */
    autoplay?: boolean;
    /** 动画效果 */
    easing?: string;
    /** 切换面板的回调 */
    beforeChange?: (from: number, to: number) => void;
    /** 切换面板的回调 */
    afterChange?: (current: number) => void;
    /** 行内样式 */
    style?: React.CSSProperties;
    prefixCls?: string;
}
export default class Carousel extends React.Component<CarouselProps, any> {
    static defaultProps: {
        dots: boolean;
        arrows: boolean;
        prefixCls: string;
    };
    render(): JSX.Element;
}
