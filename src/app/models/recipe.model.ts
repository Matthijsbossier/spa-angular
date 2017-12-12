import { Ingredient} from '../shared/ingredient.model';

export class Recipe{
    public _id: string;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];
    
    constructor(_id: string, name: string, desc: string, imagePath: string, ingredients: Ingredient[]){
        this._id = _id;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}
// export class Recipe {

//   private _name: string;
//   private _description: string;
//   private _imagePath: string;
//   private _ingredients: Ingredient[];

//   constructor(values: Object = {}) {
//     Object.assign(this, values);
//   }

//   public get name(): string {
//     return this._name;
//   }

//   public set name(n: string) {
//     this._name = n;
//   }

//     public get description(): string {
//     return this._description;
//   }

//   public set description(n: string) {
//     this._description = n;
//   }

//     public get imagePath(): string {
//     return this._imagePath;
//   }

//   public set imagePath(n: string) {
//     this._imagePath = n;
//   }

//   public get ingredients(): Ingredient[] {
//     return this._ingredients;
//   }

//   public set ingredients(n: Ingredient[]) {
//     this._ingredients = n;
//   }
// }
// export class Recipe {

//   private _name: string;
//   private _title: string;
//   private _ingredients = [];

//   constructor(values: Object = {}) {
//     Object.assign(this, values);
//   }

//   public get name(): string {
//     return this._name;
//   }

//   public set name(n: string) {
//     this._name = n;
//   }

//   public get title(): string {
//       return this._title;
//   }

//   public set title(t: string) {
//       this._title = t;
//   }

//   }
// }