import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Recipe from './Recipe';

							 // handleDeleteRecipe={this.deleteRecipe.bind(this,index)}/>)

export default class RecipesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			recipes: [{name: "Noy" ,ingredients: ["ingr", "bluh"]},{name: "Noy" ,ingredients: ["ingredd", "bluh"]},{name: "lala" ,ingredients: ["Love", "bluh"]}]
		}
	}

	deleteRecipe(id){
		let recipes = this.state.recipes;
		recipes.splice(id,1)
		this.setState({
			recipes
		});
	}

	render() {
		console.log('first', this.state.recipes[0])
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
								 handleDeleteRecipe={this.deleteRecipe.bind(this,index)}
								 handleEditRecipe={this.props.handleEditRecipe(index)}
								 />
							)
						}

				</List>
			</div>
		);
	}





}
