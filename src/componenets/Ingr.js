import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';

export default class Ingr extends Component {
	render() {
		return (
				<ListItem hoverColor="#B2DFDB" primaryText={this.props.name}/>
		);
	}
}
