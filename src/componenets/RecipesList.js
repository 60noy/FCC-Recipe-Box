import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Recipe from './Recipe';
import savedRecipes from '../actions/savedRecipes';

export default class RecipesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: savedRecipes.generate()
		}
		this.handleAddRecipe = this.handleAddRecipe.bind(this);
	}

	handleDeleteRecipe(id){
		let recipes = this.state.recipes;
		recipes.splice(id,1)
		this.setState({
			recipes
		});
		savedRecipes.set(recipes)
	}


	// sets the state to the recipes if there are any
	// or creates new recipes
	componentWillRender() {
		console.log('recipes state', this.state.recipes)
		let recipes;
		console.log('isrecipesExist', savedRecipes.isExist())
		// set the recipes to the saved on the local storage
		if (savedRecipes.isExist()) 
			recipes = savedRecipes.getAll();
		// creates new recipes
		else
			recipes = savedRecipes.generate();
		
		this.setState({recipes});
	}

	handleEditRecipe = (id) =>{
		 console.log('recipe list', id);
		 return this.props.handleEditRecipe(id)
	 }

	handleAddRecipe = (recipe) => {
		let recipes = this.state.recipes;
		recipes && recipes.push(recipe);
		this.setState({recipes})
		savedRecipes.add(recipe);
	}

	render() {
		return (
			<div>
				<List>
					<Subheader> Recipes </Subheader>
						{
							this.state.recipes.map((elem, index) =>
								<Recipe mode={this.props.handleMode}
								 name={elem.name}
								 ingredients={elem.ingredients}
								 key={index}
								 deleteRecipe={this.handleDeleteRecipe.bind(this,index)}
								 editRecipe={this.handleEditRecipe.bind(this,index)}
								 addRecipe={this.handleAddRecipe}
								 />
							)
						}

				</List>
			</div>
		);
	}





}
