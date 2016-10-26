import React from 'react';
export interface ArgsProps {
    message: React.ReactNode | string;
    description: React.ReactNode | string;
    btn?: React.ReactNode;
    key?: string;
    onClose?: () => void;
    duration?: number;
    icon?: React.ReactNode;
}
export interface ConfigProps {
    top?: number;
    duration?: number;
}
declare const api: {
    open(args: any): void;
    close(key: any): void;
    config(options: ConfigProps): void;
    destroy(): void;
};
export default api;
