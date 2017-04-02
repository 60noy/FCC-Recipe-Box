import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
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
			onTouchTap: props.deleteRecipe,
			secondary: true,
			style:{
			'paddingTop':2
		}
		},
		'edit': {
			label: 'edit',
			rippleColor: '#EF9A9A',
			onTouchTap: props.editRecipe,
			secondary: true,
			style:{
			'paddingTop':2
			}
	},
		'default' :{

		}
	}
)

export default class Recipe extends Component {
	constructor(props) {
		super(props);
		this.state ={
			ingredients : this.props.ingredients
		}
		this.deleteIngredient = this.deleteIngredient.bind(this);
	}

	// delete ingredient at a given index.
	// changes state
	deleteIngredient(index){
		let ingredients = this.state.ingredients;
		ingredients.splice(index,1);
		this.setState({ingredients})
	}

	render() {
		let mode = this.props.mode;
		const currentMode = buttonModes(this.props)[mode]
		return (
				<ListItem
					primaryText={this.props.name}
					primaryTogglesNestedList={true}
					hoverColor="#E0F2F1"
				  	rightIconButton={mode && mode !=='default' && <FlatButton {...currentMode} />}
				 	nestedItems={this.props.ingredients.map((elem,index) => (<Ingr key={index} 
				 	name={elem[index]} 
				 	delete={this.deleteIngredient.bind(this,index)}/>))}/>


		);
	}
}
