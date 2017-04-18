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
		const originalRecipe = {...this.props.recipe, index: this.props.index}
		this.state={
			open: false,
			title: originalRecipe.title,
			ingredients : originalRecipe.ingredients,
			ingredientsBox: "",
			ingredientsErrorText: "",
			titleErrorText: ""
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

	handleErrorMessages = () =>{
		const {ingredients,title} = this.state
		let isInputOk = true
		if (ingredients.length === 0 ) {
			this.setState({ingredientsErrorText:'Enter at least one ingredient'})
			isInputOk = false
		}
		if(title.length === 0){
			this.setState({titleErrorText: 'The title cannot be empty'})
			isInputOk = false
		}
		return isInputOk
	}


	// fires after click on add ingredients
	handleAddIngredients(){
		var ingredientsStr = this.state.ingredientsBox;
		let tempIngredients = this.state.ingredients;
		// adds the ingredients to the list or displays error message
		if (ingredientsStr){
			this.setState((state) => ({ingredients: state.ingredients.concat(ingredientsStr.split(",")),
				ingredientsBox: ""}));
		}
		else
			this.setState({ingredientsErrorText: "Enter Ingredients First"})
	}

	// changes state text after every text in the ingredientsBox is changed
	handleTextChange(e,value){
		this.setState({
			ingredientsBox: value
		});
	}

	handleTitleTextChange(e,value){
		this.setState({
			title: value
		});
	}

	editRecipe = (recipe) => {
		// checks whether there are not any errors
		if (this.handleErrorMessages()) {
			return this.props.editRecipe(recipe)
		}
	}


	deleteIngredient(index){
		let ingredients = this.state.ingredients;
		ingredients.splice(index,1);
		this.setState({ingredients})
	}

	render() {
		let recipe = {name: this.state.title, ingredients : this.state.ingredients}
		console.log(recipe);
		const btnAdd = (<FlatButton label="NEW" primary={true} onClick={() => this.editRecipe(recipe)} />)
		return (
				<Dialog title="Add New Recipe" actions={btnAdd} onRequestClose={this.props.onRequestClose} open={this.props.open}
				 autoScrollBodyContent={true}>
					<div className={style.container}>
						<div className={shared.title_secondary}>
							{this.state.title}
						</div>
						<TextField value={this.state.title} onChange={this.handleTitleTextChange} hintText="Enter Recipe Title"
							errorText={this.state.titleErrorText}
						/>
						<Paper zDepth={1}>
						{this.state.ingredients.length ?
							<List>
								{this.state.ingredients.map((elem,index) => <Ingr name={elem} delete={this.deleteIngredient.bind(this,index)}/>)}
							</List>
							: null}
						</Paper>
						<TextField fullWidth={true} value={this.state.ingredientsBox} onChange={this.handleTextChange} hintText="Enter ingredients seperated by comma" errorText={this.state.ingredientsErrorText} hintStyle={{color: green500, borderColor: green500}}/>
						<RaisedButton label="Add Ingredients" className={shared.btn} onClick={this.handleAddIngredients} />
					</div>
					</Dialog>
		);
	}
}
