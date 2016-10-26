import React from 'react';
import { Option, OptGroup } from 'rc-select';
export declare type SelectValue = string | any[] | {
    key: string;
    label: React.ReactNode;
} | Array<{
    key: string;
    label: React.ReactNode;
}>;
export interface SelectProps {
    prefixCls?: string;
    className?: string;
    value?: SelectValue;
    defaultValue?: SelectValue;
    size?: 'default' | 'large' | 'small';
    combobox?: boolean;
    notFoundContent?: React.ReactNode | string;
    showSearch?: boolean;
    transitionName?: string;
    choiceTransitionName?: string;
    multiple?: boolean;
    allowClear?: boolean;
    filterOption?: boolean | ((inputValue: string, option: Object) => any);
    tags?: boolean;
    onSelect?: (value: SelectValue, option: Object) => any;
    onDeselect?: (value: SelectValue) => any;
    onSearch?: (value: string) => any;
    placeholder?: string;
    dropdownMatchSelectWidth?: boolean;
    optionFilterProp?: string;
    optionLabelProp?: string;
    disabled?: boolean;
    defaultActiveFirstOption?: boolean;
    labelInValue?: boolean;
    getPopupContainer?: (triggerNode: React.ReactNode) => React.ReactNode | HTMLElement;
    style?: React.CSSProperties;
    dropdownStyle?: React.CSSProperties;
    dropdownMenuStyle?: React.CSSProperties;
    onChange?: (value) => void;
}
export interface OptionProps {
    disabled?: boolean;
    value?: any;
}
export interface OptGroupProps {
    label?: string | React.ReactElement<any>;
}
export interface SelectContext {
    antLocale?: {
        Select?: any;
    };
}
export { Option, OptGroup };
export default class Select extends React.Component<SelectProps, any> {
    static Option: React.ClassicComponentClass<OptionProps>;
    static OptGroup: React.ClassicComponentClass<OptGroupProps>;
    static defaultProps: {
        prefixCls: string;
        showSearch: boolean;
        transitionName: string;
        choiceTransitionName: string;
    };
    static propTypes: {
        prefixCls: React.Requireable<any>;
        className: React.Requireable<any>;
        size: React.Requireable<any>;
        combobox: React.Requireable<any>;
        notFoundContent: React.Requireable<any>;
        showSearch: React.Requireable<any>;
        optionLabelProp: React.Requireable<any>;
        transitionName: React.Requireable<any>;
        choiceTransitionName: React.Requireable<any>;
    };
    context: SelectContext;
    render(): JSX.Element;
}
