import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  public recipeInfo: Recipe;

  constructor() {}

  ngOnInit(): void {}

  showRecipeDetails(recipe: Recipe) {
    this.recipeInfo = recipe;
  }
}
