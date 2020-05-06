import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
 recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel' , 'A super-tasty Schnitzel - just awesome',
      'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg' ,
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fires', 20)
      ]),
    new Recipe('Big Fat Burger' , 'What else you need to say?',
      'https://static01.nyt.com/images/2019/01/23/dining/23pantryrex/23pantryrex-articleLarge.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
