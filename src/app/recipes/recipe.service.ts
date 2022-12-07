// when injected in root the service is available everywhere and does not need 
// to be imported in other files. For now, use the old method 
// import { Injectable } from '@angular/core';
// @Injectable({
//   providedIn: 'root'
// })

import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Mac & Cheese',
      'Mac & Cheese nice and creamy',
      'https://upload.wikimedia.org/wikipedia/commons/4/44/Original_Mac_n_Cheese_.jpg',
      [ new Ingredient('Macaroni',500),
        new Ingredient('Cheese', 150)]
    ),
      new Recipe('Hamburger',
      'Big fat burger',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/McDonald%27s_Quarter_Pounder_with_Cheese%2C_United_States.jpg/800px-McDonald%27s_Quarter_Pounder_with_Cheese%2C_United_States.jpg',
      [new Ingredient('Bun',1),
       new Ingredient('Meat',1)]
    )
  ];

  getRecipes() {
    return this.recipes.slice(); //return a copy of the array
  }


  constructor() { }
}
