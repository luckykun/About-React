import React from 'react';
export interface CardProps {
    title?: React.ReactNode;
    extra?: React.ReactNode;
    bordered?: boolean;
    bodyStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    loading?: boolean;
    children?: any;
    id?: string;
}
declare var _default: (props: CardProps) => JSX.Element;
export default _default;
