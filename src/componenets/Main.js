import React, { Component } from 'react';
import style from '../styles/Main.css';
import RecipesList from './RecipesList';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import shared from '../styles/shared.css';
import NewRecipeModal from './NewRecipeModal';
import savedRecipes from '../actions/savedRecipes';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state={
			showAddRecipeModal: false,
			mode: 'default'
		}
		this.handleRecipeModal = this.handleRecipeModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleAddRecipe = this.handleAddRecipe.bind(this);
	}

	handleRecipeModal(isClickOutsideModel){
		let showAddRecipeModal = !showAddRecipeModal;
		console.log('ckic',isClickOutsideModel);
		this.setState({showAddRecipeModal: isClickOutsideModel});
	}

	closeModal(){
		this.setState({showAddRecipeModal: false});
	}

	changeMode(mode){
		this.setState({mode})
	}

	handleAddRecipe(){

	}

	handleEditRecipe(index){
		console.log('index goood:' ,index);
	}

	render() {
		return (
			<div className={style.container}>
				{this.state.showAddRecipeModal ?
					 <NewRecipeModal open={this.state.showAddRecipeModal}
						  onRequestClose={this.closeModal}
						  addRecipe={this.handleAddRecipe}/> : null}
				<div className={style.title}>
				Ingredients
				</div>
				<Paper zDepth={1}>
					<RecipesList
						handleEditRecipe={this.handleEditRecipe.bind(this)}
						handleMode={this.state.mode}
						inDeleteMode={this.state.inDeleteMode}
						inEditMode={this.state.inEditMode}/>
				</Paper>
				<RaisedButton label="Add New Recipe" className={shared.btn + ' ' + shared.btn_add_new_recipe} primary={true} onTouchTap={this.handleRecipeModal}/>
				<RaisedButton label="Edit" className={shared.btn + ' ' + shared.btn_edit} onTouchTap={this.changeMode.bind(this,'edit')} secondary={true} />
				<RaisedButton label="Delete" className={shared.btn + ' ' + shared.btn_edit}  onTouchTap={this.changeMode.bind(this,'delete')}  secondary={true} />
			</div>
		);
	}
}
