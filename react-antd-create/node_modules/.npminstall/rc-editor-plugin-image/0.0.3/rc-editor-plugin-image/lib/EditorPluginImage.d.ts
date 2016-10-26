import * as React from 'react';
declare class EditorPluginImage extends React.Component<any, any> {
    constructor();
    onResize: (event: any, {element, size}: {
        element: any;
        size: any;
    }) => void;
    onMouseDown: () => void;
    render(): JSX.Element;
}
export default EditorPluginImage;
