import React from 'react';
import './rating_component.css';

export class Rating extends React.Component {
	render() {
		return <div className="rating_box">
			<img src="../images/icon-star.svg" alt="star icon"></img>
			<h1>How did we do?</h1>
			<p>Please let us know how we did with your support
				request. All feedback is appreciated to help us
				improve our offering!
			</p>
		</div>;
	}
};