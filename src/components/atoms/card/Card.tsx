import React from 'react';
import './styles.css';

interface Props {
    type: string,
}

export class Card extends React.Component<Props> {
    render() {
        let classes = "card ";

        classes += "card__" + this.props.type;
        console.log(classes);

        return <div className={classes}>
            {
                this.props.children
            }
        </div>
    }
}