import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'; 
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Macaroni',500, 'grams'),
    new Ingredient('Cheese', 250,'grams')  
  ];



}
