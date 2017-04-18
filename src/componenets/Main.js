import React, { Component } from 'react';
import style from '../styles/Main.css';
import RecipesList from './RecipesList';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import shared from '../styles/shared.css';
import NewRecipeModal from './NewRecipeModal';
import EditRecipeModal from './EditRecipeModal';
import savedRecipes from '../actions/savedRecipes';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state={
			showAddRecipeModal: false,
			showEditRecipeModal: false,
			mode: 'default',
			recipes: savedRecipes.generate()
		}
		this.handleAddRecipeModal = this.handleAddRecipeModal.bind(this);
		this.closeAddModal = this.closeAddModal.bind(this);
		this.closeEditModal = this.closeEditModal.bind(this);
	}

	handleAddRecipeModal(isClickOutsideModel){
		let showAddRecipeModal = !this.state.showAddRecipeModal;
		this.setState({showAddRecipeModal});
		}



	closeAddModal(){
		this.setState({showAddRecipeModal: false});
	}

	closeEditModal(){
		this.setState({showEditRecipeModal: false});
	}

	changeMode(newMode){
		let mode = this.state.mode === newMode ? 'default' : newMode
		this.setState({mode})
	}

	handleDeleteRecipe = (index) => {
		let recipes = this.state.recipes
		recipes.splice(index,1)
		this.setState({recipes})
	}

	handleAddRecipe = (recipe)=>{
		// let recipes = savedRecipes.add(recipe)
		// savedRecipes.set(recipes)
		let recipes = this.state.recipes
		recipes.push(recipe)
		this.setState({showAddRecipeModal:false,recipes})
	}
	//
	handleEditRecipe = (recipe,index) =>{
		// let showEditRecipeModal = !this.state.showEditRecipeModal
		// this.setState({showEditRecipeModal})
		//
	}


	render() {
		return (
			<div className={style.container}>
				{this.state.showAddRecipeModal ?
					 <NewRecipeModal open={this.state.showAddRecipeModal}
						  onRequestClose={this.closeAddModal}
						  addNew={this.handleAddRecipe}/> : null}

				<div className={style.title}>
				Ingredients
				</div>
				<Paper zDepth={1}>
					<RecipesList
						handleMode={this.state.mode}
						deleteRecipe={() =>this.handleDeleteRecipe}
						editRecipe={this.handleEditRecipe}
						inDeleteMode={this.state.inDeleteMode}
						inEditMode={this.state.inEditMode}
						recipes={this.state.recipes}
					/>
				</Paper>
				<RaisedButton label="Add New Recipe" className={shared.btn + ' ' + shared.btn_add_new_recipe} primary={true} onTouchTap={this.handleAddRecipeModal}/>
				<RaisedButton label="Edit" className={shared.btn + ' ' + shared.btn_edit} onTouchTap={this.changeMode.bind(this,'edit')} secondary={true} />
				<RaisedButton label="Delete" className={shared.btn + ' ' + shared.btn_edit}  onTouchTap={this.changeMode.bind(this,'delete')}  secondary={true} />
			</div>
		);
	}
}
