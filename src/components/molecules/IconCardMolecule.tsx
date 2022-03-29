import React from 'react';
import { Card } from '../atoms/card/Card';
import { IconAtom } from '../atoms/icon/IconAtom';

import star from "../../images/icon-star.svg";

let icons = {
    "star" : star,
}

interface Props {
    icon: "star",
}

export class IconMolecule extends React.Component<Props>
{
    render() {
        return <Card type="icon">
            <IconAtom image={icons[this.props.icon]}></IconAtom>
        </Card>;
    }
}
