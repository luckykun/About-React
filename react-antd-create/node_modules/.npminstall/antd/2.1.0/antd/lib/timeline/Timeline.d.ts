import React from 'react';
export interface TimelineProps {
    /** 指定最后一个幽灵节点是否存在或内容 */
    pending?: boolean | React.ReactNode;
    style?: React.CSSProperties;
}
export default class Timeline extends React.Component<TimelineProps, any> {
    static Item: React.ReactNode;
    static defaultProps: {
        prefixCls: string;
    };
    render(): JSX.Element;
}
