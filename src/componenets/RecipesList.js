import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Recipe from './Recipe';

export default class RecipesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: this.props.recipes
		}
	}



	// sets the state to the recipes if there are any
	// or creates new recipes
	componentDidMount() {
		// console.log('recipes state', this.state.recipes)
		// let recipes;
		// console.log('isrecipesExist', savedRecipes.isExist())
		// // set the recipes to the saved on the local storage
		// if (savedRecipes.getAll().length > 0)
		// 	recipes = savedRecipes.getAll();
		// // creates new recipes
		// else
		// 	recipes = savedRecipes.generate();
		//
		// 	console.log('cdm rec', recipes[0]);
		// this.setState({recipes: recipes});
		// savedRecipes.set(recipes)
	}


	render() {
		let recipes = this.props.recipes
		console.log('recipes render',recipes);
		return (
			<div>
				<List>
					<Subheader> Recipes </Subheader>
						{!!recipes.length && recipes.map((elem, index) =>
								<Recipe mode={this.props.handleMode}
								 name={elem.name}
								 ingredients={elem.ingredients}
								 key={index}
								 deleteRecipe={this.props.deleteRecipe(index)}
								 editRecipe={this.props.editRecipe(elem,index)}
								 />
							)
						}

				</List>
			</div>
		);
	}





}
