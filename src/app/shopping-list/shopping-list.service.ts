import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3),
    new Ingredient('Garlics', 1),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingInput: Ingredient) {
    this.ingredients.push(ingInput);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next (this.ingredients.slice());
  }
}
