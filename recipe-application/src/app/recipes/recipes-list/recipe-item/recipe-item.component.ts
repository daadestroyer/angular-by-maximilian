import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipesItemComponent implements OnInit {
  @Input() recipeInput: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipeInput);
  }
}
