import React from 'react';
import { Card } from '../atoms/card/Card';
import { RowAtom } from '../atoms/row/Row';
import { DescriptionMolecule } from '../molecules/DescriptionMolecule';
import { IconMolecule } from '../molecules/IconCardMolecule';
import { PrimaryButtonMolecule } from '../molecules/PrimaryButtonMolecule';
import { RatingMolecule } from '../molecules/Rating';
import { TitleMolecule } from '../molecules/TitleMolecule';

interface State {
    selectedValue: number;
}

function Spacer() {
    return <div style={{ marginTop: 24 }} />
}

export class RatingOrganism extends React.Component<{}, State>
{
    constructor(props: any) {
        super(props);
        this.state = {
            selectedValue: 0
        }
    }

    onSelectRating = (i: number) => {
        console.log(i);
        this.setState({ selectedValue: i });
    }


    render() {

        return <Card type="rating">
            <IconMolecule icon="star" />
            <Spacer />
            <TitleMolecule title='How did we do?' />
            <Spacer />
            <DescriptionMolecule description='Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!' />
            <Spacer />
            <RatingMolecule maxRating={5} rating={this.state.selectedValue} onChange={this.onSelectRating} />
            <Spacer />
            <PrimaryButtonMolecule fullWidth>SUBMIT</PrimaryButtonMolecule>
            <Spacer />
        </Card>
    }
}