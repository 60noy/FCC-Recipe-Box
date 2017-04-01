import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

export class DeleteRecipeButton extends Component {
	render() {
		return (
			<FlatButton label={this.props.label} secondary={true} onTouchTap={this.props.handleClick}/>
		);
	}
}
