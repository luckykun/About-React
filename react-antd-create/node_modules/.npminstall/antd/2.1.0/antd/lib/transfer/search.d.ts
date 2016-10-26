import React from 'react';
export interface SearchProps {
    prefixCls?: string;
    placeholder?: string;
    onChange?: (e: React.FormEvent) => void;
    handleClear?: (e: React.MouseEvent) => void;
    value?: any;
}
export default class Search extends React.Component<SearchProps, any> {
    static defaultProps: {
        placeholder: string;
        onChange: () => void;
        handleClear: () => void;
    };
    handleChange: (e: any) => void;
    handleClear: (e: any) => void;
    render(): JSX.Element;
}
