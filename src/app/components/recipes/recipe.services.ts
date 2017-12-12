// import { EventEmitter, Injectable } from '@angular/core';
// import {Recipe} from './recipe.model';
// import { Ingredient} from '../../shared/ingredient.model';
// import { ShoppingListService} from '../shopping-list/shopping-list.services';
//
//
// @Injectable()
// export class RecipeService {
//     recipeSelected = new EventEmitter<Recipe>();
//
//
//  private recipes: Recipe[] = [
//     // new Recipe('A Test Recipe',
//     //  'This is a little test',
//     //  'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
//     //  [
//     //      new Ingredient('Big Mac', 1),
//     //      new Ingredient('McChicken', 2)
//     //  ]),
//     // new Recipe('Another Test Recipe',
//     // 'This is a little test',
//     // 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
//     // [
//     //     new Ingredient('Hamburger', 5),
//     //      new Ingredient('Cheeseburger', 5)
// //     ])
// // //    new Recipe('A Test Recipe', 'This is a little test', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
//
//   ];
//
//   constructor(private slService: ShoppingListService){
//
//   }
//
//   getRecipes(){
//       console.log(this.recipes.slice());
//       return this.recipes.slice();
//   }
//
//   addIngredientsToShoppingList(ingredients: Ingredient[]){
//     this.slService.addIngredients(ingredients);
//   }
//
// }