import React from 'react';
import './styles.css';

interface Props {
	image: string;
}

export class IconAtom extends React.Component<Props> {
    render() {
		return <img className="icon_img" src={this.props.image} alt='star icon' />
	}
}