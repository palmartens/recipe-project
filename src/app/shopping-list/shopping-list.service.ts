import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter }  from "@angular/core";
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Macaroni',500),
    new Ingredient('Cheese', 250)  
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    console.log("Add ingredient",ingredient);
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
