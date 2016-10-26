import React from 'react';
export interface ConfigOptions {
    top?: number;
    duration?: number;
    prefixCls?: string;
}
declare var _default: {
    info(content: React.ReactElement<any> | string | number | {} | (React.ReactElement<any> | string | number | any[] | boolean)[] | boolean, duration?: number, onClose?: () => void): () => void;
    success(content: React.ReactElement<any> | string | number | {} | (React.ReactElement<any> | string | number | any[] | boolean)[] | boolean, duration?: number, onClose?: () => void): () => void;
    error(content: React.ReactElement<any> | string | number | {} | (React.ReactElement<any> | string | number | any[] | boolean)[] | boolean, duration?: number, onClose?: () => void): () => void;
    warn(content: React.ReactElement<any> | string | number | {} | (React.ReactElement<any> | string | number | any[] | boolean)[] | boolean, duration?: number, onClose?: () => void): () => void;
    warning(content: React.ReactElement<any> | string | number | {} | (React.ReactElement<any> | string | number | any[] | boolean)[] | boolean, duration?: number, onClose?: () => void): () => void;
    loading(content: React.ReactElement<any> | string | number | {} | (React.ReactElement<any> | string | number | any[] | boolean)[] | boolean, duration?: number, onClose?: () => void): () => void;
    config(options: ConfigOptions): void;
    destroy(): void;
};
export default _default;
