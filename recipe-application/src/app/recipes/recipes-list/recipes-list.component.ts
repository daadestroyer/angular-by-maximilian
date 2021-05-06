import { Recipe } from './../recipe.model';

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipe:Recipe[] = [
      new Recipe("Honey Chilli Potato","Sweet and Spicy dish","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hvW1sDDACnRhs6qADT9AMgHaDt%26pid%3DApi&f=1"),
      new Recipe("Tandoori Chicken","Tandoori chicken with lemon and onion","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chicken-tandori-1526595014.jpg?crop=1.00xw:0.623xh;0,0.305xh&resize=1200:*"),
    ];


  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
