import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

export default class Ingr extends Component {
	render() {
		return (
				<ListItem hoverColor="#B2DFDB" 
				primaryText={this.props.name}
				rightIconButton={<FlatButton label="Delete"
				onTouchTap={this.props.delete} /> } />
		);
	}
}
