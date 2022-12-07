import { Ingredient } from "../shared/ingredient.model";
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Macaroni',500),
    new Ingredient('Cheese', 250)  
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
