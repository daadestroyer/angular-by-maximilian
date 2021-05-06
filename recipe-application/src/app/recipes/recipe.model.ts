export class Recipe{
  public recipeName:string;
  public recipeDesc:string;
  public recipeImgPath:string;

  constructor(name:string,desc:string,recipeImg:string){
    this.recipeName=name;
    this.recipeDesc=desc;
    this.recipeImgPath=recipeImg;
  }
}
