import React from 'react';
export default function wrapPicker(Picker: any, defaultFormat?: any): React.ClassicComponentClass<{
    format: any;
    transitionName: string;
    popupStyle: {};
    onChange(): void;
    onOk(): void;
    onOpenChange(): void;
    locale: {};
    align: {
        offset: number[];
    };
    prefixCls: string;
    inputPrefixCls: string;
}>;
