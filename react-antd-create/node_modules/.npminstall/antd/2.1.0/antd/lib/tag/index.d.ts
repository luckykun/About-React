import React from 'react';
export interface TagProps {
    /** 标签是否可以关闭 */
    closable?: boolean;
    /** 关闭时的回调 */
    onClose?: Function;
    /** 动画关闭后的回调 */
    afterClose?: Function;
    /** 标签的色彩 */
    color?: string;
    style?: React.CSSProperties;
}
export default class Tag extends React.Component<TagProps, any> {
    static defaultProps: {
        prefixCls: string;
        closable: boolean;
        onClose(): void;
        afterClose(): void;
    };
    constructor(props: any);
    close: (e: any) => void;
    animationEnd: (key: any, existed: any) => void;
    render(): JSX.Element;
}
