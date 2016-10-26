import React from 'react';
export interface RadioButtonProps {
    value: string | number;
    style?: React.CSSProperties;
}
export default class RadioButton extends React.Component<RadioButtonProps, any> {
    static defaultProps: {
        prefixCls: string;
    };
    render(): JSX.Element;
}
