import React from 'react';
import './styles.css';

interface Props {
    fullWidth?: boolean;
    rounded?: boolean;
    type: "primary" | "dark";
    onClick?: () => any;
}

export class ButtonAtom extends React.Component<Props> {
    public render() {
        const { children, onClick, type } = this.props;
        let className = `btn btn__${type}`;

        if (this.props.fullWidth)
            className += " btn__fullWidth";

        if (this.props.rounded)
            className += " btn__rounded";

        return <button className={className} onClick={onClick}>{children}</button>
    }
}