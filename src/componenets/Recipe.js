import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/Rai
sedButton';
import FlatButton from 'material-ui/FlatButton';
import Ingr from './Ingr';
import style from '../styles/Recipe.css';
import {Paper} from 'material-ui';
import DeleteRecipeButton from './DeleteRecipeButton';


const buttonModes = (props) => (
	{
		'delete': {
			label: 'delete',
			rippleColor: '#EF9A9A',
			onTouchTap: props.handleDeleteRecipe,
			secondary: true
		},
		'edit': {
			label: 'edit',
			rippleColor: '#EF9A9A',
			onTouchTap: props.handleEditMode,
			secondary: true
		},
		'default': {
			
		}
	}
)



export default class Recipe extends Component {

	render() {
		let mode = this.props.mode;
		const currentMode = buttonModes(this.props)[mode]
		console.log("CRENT)MODE", currentMode);
		console.log('button modes',buttonModes(this.props)[0]);
		console.log('mode',currentMode);
		return (
				<ListItem 
					primaryText={this.props.name} 
					primaryTogglesNestedList={true} 
					hoverColor="#E0F2F1"
				  	rightIconButton={mode && mode !=='default' && <FlatButton {...currentMode} />}
				 nestedItems={this.props.ingredients.map((elem,index) => (<Ingr key={index} name={elem[index]}/>))}/>

				
		);
	}
}
