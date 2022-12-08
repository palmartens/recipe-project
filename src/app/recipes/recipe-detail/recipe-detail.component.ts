import { Component, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private slService: ShoppingListService) {};

  ingredientsToShoppinglist() {
    console.log(`Add ingredients to shopping list: ${this.recipe.ingredients} `);
    
    this.slService.addIngredients(this.recipe.ingredients);
  }


}
