import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import List from 'material-ui/List';
import Ingr from './Ingr';
import Paper from 'material-ui/Paper';
import {green500} from 'material-ui/styles/colors';
import shared from '../styles/shared.css';
import style from '../styles/NewRecipeModal.css';

// modal to add new recipe

export default class NewRecipeModal extends Component {
	constructor(props) {
		super(props);
		this.state={
			open: false,
			title: "",
			ingredients: [],
			textBox: "",
			errorText: ""
		}
		this.handleClose = this.handleClose.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleAddIngredients = this.handleAddIngredients.bind(this);
		this.handleTitleTextChange = this.handleTitleTextChange.bind(this);
	}

	// closes the modal
	handleClose(){
		this.setState({open: false});
	}


	// fires after click on add ingredients
	handleAddIngredients(){
		var ingredientsStr = this.state.textBox;
		let tempIngredients = this.state.ingredients;
		// adds the ingredients to the list or displays error message
		if (ingredientsStr){
			this.setState((state) => ({ingredients: state.ingredients.concat(ingredientsStr.split(",")),
				textBox: ""})); 

		}
	
		else
			this.setState({errorText: "Enter Ingredients First"})
		
	
	}

	// changes state text after every text in the textbox is changed
	handleTextChange(e,value){
		console.log('value',value);
		this.setState({
			textBox: value
		});
	}

	handleTitleTextChange(e,value){
		this.setState({
			title: value
		});
	}



	render() {
		const btnAdd = <FlatButton label="OK" primary={true} onTouchTap={this.props.close}/>
		return (
				<Dialog title="Add New Recipe" actions={btnAdd} onRequestClose={this.props.close} open={this.props.handleShowDialog}
				 autoScrollBodyContent={true}>
					<div className={style.container}>
						<div className={shared.title_secondary}>
							{this.state.title}
						</div>
						<TextField value={this.state.title} onChange={this.handleTitleTextChange} hintText="Enter Recipe Title"/>
						<Paper zDepth={1}>
						{this.state.ingredients.length ?
							<List>
								{this.state.ingredients.map((elem) => <Ingr name={elem}/>)}
							</List>
							: null}
						</Paper>
						<TextField fullWidth={true} value={this.state.textBox} onChange={this.handleTextChange} hintText="Enter ingredients seperated by comma" errorText={this.state.errorText} hintStyle={{color: green500, borderColor: green500}}/>
						<RaisedButton label="OK" className={shared.btn} onClick={this.handleAddIngredients} />
					</div>
					</Dialog>
		);
	}
}
