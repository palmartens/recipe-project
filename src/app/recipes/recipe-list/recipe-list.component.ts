import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Mac & Cheese','Macaroni (500g), Kaas (250g)','https://upload.wikimedia.org/wikipedia/commons/4/44/Original_Mac_n_Cheese_.jpg'),
    new Recipe('Spaghetti','Spaghetti (500g)','https://upload.wikimedia.org/wikipedia/commons/4/4e/Pasta_with_tomatoes_%287148182009%29.jpg')
  ];

  constructor() {  }

  selectRecipe(recipe: Recipe){
    console.log('Recipe selected', recipe);
    this.recipeWasSelected.emit(recipe);
  }

}
