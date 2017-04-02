
export default class savedRecipes{
	// checks if there are recipes on local storage
	static isExist() { return (localStorage.getItem('recipes'))}
	// return the saved recipes
	static getAll() { return localStorage.getItem('recipes')}
	// adds item to saved recipes and returns the modified recipe
	static add(recipe) {
		let localRecipes = localStorage.getItem('recipes');
		localRecipes.push(recipe)
		localStorage.setItem('recipes',localRecipes)
		return localRecipes;
	}
	// deletes recipe from local storage
	static delete(index){
		let localRecipes = localStorage.getItem('recipes');
		localRecipes.splice(index,1)
		localStorage.setItem('recipes',localRecipes)
		return localRecipes;
	}

	static generate(){
		return [{name: "Mevin" ,ingredients: ["ingredd", "bluh"]}]
	}

	static set(recipes){
		localStorage.setItem('recipes',recipes)
	}

	
};