import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe1',
         'This is simply a test',
          'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
          [
            new Ingredient('Meat', 1),
            new Ingredient('French Fires', 20), 
          ]
        ),
        new Recipe(
          'A Test Recipe2',
         'This is simply a test',
          'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
          [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1), 
          ]
        ),
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}