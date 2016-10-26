import React from 'react';
export interface GroupProps {
    className?: string;
    size?: 'large' | 'small' | 'default';
    children?: any;
    style?: React.CSSProperties;
    prefixCls?: string;
}
declare const Group: React.StatelessComponent<GroupProps>;
export default Group;
