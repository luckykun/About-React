import React from 'react';
import { TreeSelectProps, TreeSelectContext } from './interface';
export { TreeSelectProps };
export default class TreeSelect extends React.Component<TreeSelectProps, any> {
    static TreeNode: any;
    static SHOW_ALL: any;
    static SHOW_PARENT: any;
    static SHOW_CHILD: any;
    static defaultProps: {
        prefixCls: string;
        transitionName: string;
        choiceTransitionName: string;
        showSearch: boolean;
        dropdownClassName: string;
    };
    static contextTypes: {
        antLocale: React.Requireable<any>;
    };
    context: TreeSelectContext;
    render(): JSX.Element;
}
