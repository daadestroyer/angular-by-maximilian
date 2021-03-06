import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipe: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipe = this.recipeService.getRecipes();
  }
}
