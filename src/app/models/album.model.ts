import { Song } from '../models/song.model';

export class Album{
    // private _id: string;
    // private name: string;
    // private description: string;
    // private imagePath: string;
    // private year: number;
    // private songs: Song[];

    public _id: string;
    public name: string;
    public description: string;
    public imagePath: string;
    public year: number;
    public songs: Song[];

    // constructor(values: Object ={}){
    //     Object.assign(this, values);
    // }

    constructor(_id: string, name: string, description: string, imagePath: string, year: number, songs: Song[]){
        this._id = _id;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.year = year;
        this.songs = songs;
    }

    public get _name(): string {
        return this.name;
    }

    public set _name(n : string ){
        this.name = n;
    }

    public get _description(): string {
        return this.description;
    }

    public set _description(n: string){
        this.description = n;
    }

    public get _imagePath(): string {
        return this.imagePath;
    }

    public set _imagePath(n: string) {
        this.imagePath = n;
    }

    public get _year(): number {
        return this.year;
    }

    public set _year(n: number){
        this.year = n;
    } 

    public get _songs(): Song[] {
        return this.songs;
    }

    public set _songs(n: Song[]){
        this.songs = n;
    }

}