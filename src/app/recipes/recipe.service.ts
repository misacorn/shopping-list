import { Recipe } from './recipe-list/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Proper Meal for Lunch',
      'Shall we have some cheese today?',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
      [
        { name: 'Cheese', amount: 1 },
        { name: 'Oregano', amount: 0.5 },
      ]
    ),
    new Recipe(
      'Dessert recipe',
      'Vitamin C for everyone',
      'https://www.micadeli.com/wp-content/uploads/2018/11/tips-nemme-snacks.jpg',
      [
        { name: 'Kiwi', amount: 2 },
        { name: 'Grapefruit', amount: 0.5 },
        { name: 'Peach', amount: 1 },
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ing: Ingredient[]) {
    this.shoppingListService.addIngredients(ing);
  }
}
