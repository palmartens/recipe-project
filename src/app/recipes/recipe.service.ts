// when injected in root the service is available everywhere and does not need 
// to be imported in other files. For now, use the old method 
// import { Injectable } from '@angular/core';
// @Injectable({
//   providedIn: 'root'
// })

import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Mac & Cheese','Macaroni (500g), Kaas (250g)','https://upload.wikimedia.org/wikipedia/commons/4/44/Original_Mac_n_Cheese_.jpg'),
    new Recipe('Spaghetti','Spaghetti (500g)','https://upload.wikimedia.org/wikipedia/commons/4/4e/Pasta_with_tomatoes_%287148182009%29.jpg')
  ];

  getRecipes() {
    return this.recipes.slice(); //return a copy of the array
  }


  constructor() { }
}
