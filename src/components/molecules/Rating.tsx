import React from 'react';
import {ButtonAtom} from '../atoms/button/ButtonAtom';
import { RowAtom } from '../atoms/row/Row';

interface Props {
    maxRating: number;
    rating?: number;
    onChange?: (rating: number) => any;
}

export class RatingMolecule extends React.Component<Props> {
    render() {
        const options = [];

        for (let i = 1; i <= this.props.maxRating; i++) {
           options.push(<ButtonAtom rounded type='dark' {...this.props}>{i}</ButtonAtom>);
        }

        return <RowAtom layout='spread'>
            {
                options.map(option => option)
            }
        </RowAtom>
    }
}