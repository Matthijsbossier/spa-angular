import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http } from '@angular/http';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../components/shopping-list/shopping-list.services';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    // new Recipe(
    //     'Tasty Schnitzel',
    //     'A super-tasty Schnitzel - just awesome!',
    //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    //     [
    //       new Ingredient('Meat', 1),
    //       new Ingredient('French Fries', 20)
    //     ]),
    // new Recipe('Big Fat Burger',
    //     'What else you need to say?',
    //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    //     [
    //       new Ingredient('Buns', 2),
    //       new Ingredient('Meat', 1)
    //     ])
  ];

  constructor(private slService: ShoppingListService, private http: Http) {
    this.readRecipes();
  }

  public readRecipes() {
    this.http.get(environment.serverUrl + '/recipes')
        .map((response) => {
          console.log("map");
          const recipes = response.json() as Recipe[];
          return recipes;
        })
        .subscribe((recipes) => {
          console.log('subscribe');
          this.recipes = recipes as Recipe[];
          this.recipesChanged.next(this.recipes.slice());
        });
  }


  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

//   addRecipe(recipe: Recipe) {
//       this.recipes.push(recipe)
//       this.recipesChanged.next(this.recipes.slice());
//   }

  addRecipe(recipe: Recipe) {
    console.log('addRecipe');
    console.dir(recipe);
    this.http.post(environment.serverUrl + '/recipes/', recipe)
    .map(response => response.json() as Recipe)
    .subscribe(result => {
    this.recipes.push(result as Recipe);
    this.recipesChanged.next(this.recipes.slice());
    }) 
    
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    console.log('updateRecipe');
    console.dir(newRecipe);
    
    this.http.put(environment.serverUrl + '/recipes/' + this.recipes[index]._id, newRecipe)
    .map(response => response.json() as Recipe)
    .subscribe(result => {
        this.recipes[index] = newRecipe;
        //this.recipes.push(newRecipe);
        this.recipesChanged.next(this.recipes.slice());

    })
    //this.recipes[index] = newRecipe;
    //this.recipesChanged.next(this.recipes.slice());
  }
//
  deleteRecipe(index: number) {
    console.log('deleteRecipe');
    
    this.http.delete(environment.serverUrl + '/recipes/' + this.recipes[index]._id)
    //.map(response => response.json() as Recipe)
    //.subscribe(result => {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
    //});
    // this.recipes.splice(index, 1);
    // this.recipesChanged.next(this.recipes.slice());
  }
}
