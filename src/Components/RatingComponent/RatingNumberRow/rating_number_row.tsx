import React from 'react';
import './rating_number_row.css';

export class RatingNumberRow extends React.Component {
    render() {
        return <div id="rating_number_row">
            <input type="radio"  name='rate_number' value={1} className="rate_number"/>
            <input type="radio"  name='rate_number' value={2} className="rate_number"/>
            <input type="radio"  name='rate_number' value={3} className="rate_number"/>
            <input type="radio"  name='rate_number' value={4} className="rate_number"/>
            <input type="radio"  name='rate_number' value={5} className="rate_number"/>
        </div>
    }
}