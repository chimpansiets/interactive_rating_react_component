import React from 'react';
import {ButtonAtom} from '../atoms/button/ButtonAtom';
import { RowAtom } from '../atoms/row/Row';

interface Props {
    maxRating: number;
    rating?: number;
    onChange: (rating: number) => any;
}

export class RatingMolecule extends React.Component<Props> {
    render() {
        const options = [];

        for (let i = 1; i <= this.props.maxRating; i++) {
            if (this.props.rating === i) {
                options.push(<ButtonAtom onClick={() => this.props.onChange(i)} rounded type='primary' {...this.props}>{i}</ButtonAtom>);
            } else {
                options.push(<ButtonAtom onClick={() => this.props.onChange(i)} rounded type='dark' {...this.props}>{i}</ButtonAtom>);
            }
        }

        return <RowAtom layout='spread'>
            {
                options.map(option => option)
            }
        </RowAtom>
    }
}