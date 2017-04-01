import React, { Component } from 'react';
import style from '../styles/Main.css';
import RecipesList from './RecipesList';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import shared from '../styles/shared.css';
import NewRecipeModal from './NewRecipeModal';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state={
			showAddRecipeModal: false,
			mode: 'default'
		}

		this.handleRecipeModal = this.handleRecipeModal.bind(this);
	}

	handleRecipeModal(isClickOutsideModel){
		let showAddRecipeModal = isClickOutsideModel;
		this.setState({showAddRecipeModal: showAddRecipeModal});
	}

	changeMode(mode){
		this.setState({mode})
	}


	render() {
		return (
			<div className={style.container}>
				{this.state.showAddRecipeModal ? <NewRecipeModal close={this.handleRecipeModal} handleShowDialog={this.state.showAddRecipeModal}/> : null}
				<div className={style.title}>
				Ingredients				
				</div>
				<Paper zDepth={1}>
					<RecipesList handleMode={this.state.mode} inDeleteMode={this.state.inDeleteMode} inEditMode={this.state.inEditMode}/>
				</Paper>
				<RaisedButton label="Add New Recipe" className={shared.btn + ' ' + shared.btn_add_new_recipe} primary={true} onTouchTap={this.handleRecipeModal}/>
				<RaisedButton label="Edit" className={shared.btn + ' ' + shared.btn_edit} onTouchTap={this.changeMode.bind(this,'edit')} secondary={true} />
				<RaisedButton label="Delete" className={shared.btn + ' ' + shared.btn_edit}  onTouchTap={this.changeMode.bind(this,'delete')}  secondary={true} />
			</div>
		);
	}
}
