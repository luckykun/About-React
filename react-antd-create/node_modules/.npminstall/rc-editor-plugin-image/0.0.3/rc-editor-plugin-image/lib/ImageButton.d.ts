import React from 'react';
export interface ImageButtonProps {
    insertPicture: (url: string) => void;
}
export default class ImageButton extends React.Component<ImageButtonProps, any> {
    constructor();
    toggleVisible(): void;
    render(): JSX.Element;
}
