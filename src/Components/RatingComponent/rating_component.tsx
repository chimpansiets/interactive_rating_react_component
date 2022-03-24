import React from 'react';
import { RatingNumberRow } from './RatingNumberRow/rating_number_row';
import './rating_component.css';
import { SubmitButton } from './SubmitButton/submit_button';
import star_icon from '../../images/icon-star.svg';

export class Rating extends React.Component {
	render() {
		return <div className="rating_box">
			<div id="star_icon_background">
				<img src={star_icon} alt="star icon" id='star_icon_svg'></img>
			</div>
			<h1>How did we do?</h1>
			<p>Please let us know how we did with your support
				request. All feedback is appreciated to help us
				improve our offering!
			</p>
			<RatingNumberRow></RatingNumberRow>
			<SubmitButton></SubmitButton>
		</div>;
	}
};