import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  


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
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
