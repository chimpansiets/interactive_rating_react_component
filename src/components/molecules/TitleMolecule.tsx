import React from 'react';
import { Label } from '../atoms/label/Label';

interface Props {
    title: string;
}
export class TitleMolecule extends React.Component<Props>
{
    render() {
        return <Label type='title'>{this.props.title}</Label>
    }
}

