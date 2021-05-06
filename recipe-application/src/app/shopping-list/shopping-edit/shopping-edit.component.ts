import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") nameInputRef : ElementRef;
  @ViewChild("amtInput") amtInputRef : ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  onAddItem(){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,this.amtInputRef.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }
}
