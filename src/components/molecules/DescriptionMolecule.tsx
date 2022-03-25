import React from 'react';
import { Label } from '../atoms/label/Label';   

interface Props {
    description: string;
}
export class DescriptionMolecule extends React.Component<Props>
{
    render() {
        return <Label type='body'>{this.props.description}</Label>;
    }
}
