export interface ActionButtonProps {
    type: 'primary' | 'ghost' | 'dashed';
    actionFn: Function;
    closeModal: Function;
    autoFocus?: Boolean;
}
export default function confirm(config: any): {
    destroy: () => void;
};
