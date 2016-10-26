import React from 'react';
import Modal from './Modal';
export interface ModalFuncProps {
    visible?: boolean;
    title?: React.ReactNode | string;
    content?: React.ReactNode | string;
    onOk?: (func: Function) => any;
    onCancel?: (func: Function) => any;
    width?: string | number;
    iconClassName?: string;
    okText?: string;
    cancelText?: string;
    iconType?: string;
}
export default Modal;
