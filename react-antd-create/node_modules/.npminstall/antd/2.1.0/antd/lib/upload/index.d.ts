import React from 'react';
import { UploadProps } from './interface';
export { UploadProps };
export declare function Dragger(props: any): JSX.Element;
export default class Upload extends React.Component<UploadProps, any> {
    static Dragger: typeof Dragger;
    static defaultProps: {
        prefixCls: string;
        type: string;
        multiple: boolean;
        action: string;
        data: {};
        accept: string;
        onChange: () => void;
        beforeUpload: () => boolean;
        showUploadList: boolean;
        listType: string;
        className: string;
        disabled: boolean;
        onRemove(): void;
        onPreview(): void;
    };
    recentUploadStatus: boolean | PromiseLike<any>;
    progressTimer: any;
    refs: {
        [key: string]: any;
        upload: any;
    };
    constructor(props: any);
    onStart: (file: any) => void;
    autoUpdateProgress(percent: any, file: any): void;
    removeFile(file: any): any;
    onSuccess: (response: any, file: any) => void;
    onProgress: (e: any, file: any) => void;
    onError: (error: any, response: any, file: any) => void;
    handleRemove(file: any): void;
    handleManualRemove: (file: any) => void;
    onChange: (info: any) => void;
    componentWillReceiveProps(nextProps: any): void;
    onFileDrop: (e: any) => void;
    clearProgressTimer(): void;
    render(): JSX.Element;
}
