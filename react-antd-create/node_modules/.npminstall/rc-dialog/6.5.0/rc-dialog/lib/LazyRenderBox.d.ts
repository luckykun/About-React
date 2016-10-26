/// <reference types="react" />
import React from 'react';
export interface LazyRenderBoxPropTypes {
    className?: string;
    visible?: boolean;
    hiddenClassName?: string;
    role?: string;
    style?: {};
}
declare const LazyRenderBox: React.ClassicComponentClass<LazyRenderBoxPropTypes>;
export default LazyRenderBox;
