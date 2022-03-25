import React from 'react';
import { ButtonAtom } from '../atoms/button/ButtonAtom';

interface Props {
    fullWidth?: boolean;
    onClick?: () => any;
}

export class PrimaryButtonMolecule extends React.Component<Props> {
    public render() {
        return <ButtonAtom fullWidth={this.props.fullWidth} type='primary' {...this.props}>{this.props.children}</ButtonAtom>
    }
}