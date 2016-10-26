/// <reference types="react" />
import React from 'react';
export interface ModalPropTypes {
    wrapStyle?: {};
    maskStyle?: {};
    style?: {};
    animationType: 'none' | 'fade' | 'slide-up' | 'slide-down';
    animationDuration?: number;
    visible: boolean;
    maskClosable?: boolean;
    animateAppear?: boolean;
    onClose?: () => void;
    onAnimationEnd?: (visible: boolean) => void;
}
declare const RCModal: React.ClassicComponentClass<ModalPropTypes>;
export default RCModal;
