import React from 'react';
import './styles.css';

export class Card extends React.Component {
    render() {
        return <div className='card'>
            {
                this.props.children
            }
        </div>
    }
}