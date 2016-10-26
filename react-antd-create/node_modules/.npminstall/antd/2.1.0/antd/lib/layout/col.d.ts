import React from 'react';
export interface ColSize {
    span?: number;
    order?: number;
    offset?: number;
    push?: number;
    pull?: number;
}
export interface ColProps {
    className?: string;
    span?: number;
    order?: number;
    offset?: number;
    push?: number;
    pull?: number;
    xs?: number | ColSize;
    sm?: number | ColSize;
    md?: number | ColSize;
    lg?: number | ColSize;
    prefixCls?: string;
    style?: React.CSSProperties;
}
declare const Col: React.StatelessComponent<ColProps>;
export default Col;
