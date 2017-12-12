import { Album } from '../models/album.model';

export class Artist{
    // private _id: string;
    // private name: string;
    // private description: string;
    // private imagePath: string;
    // private albums: Album[];


    public _id: string;
    public name: string;
    public description: string;
    public imagePath: string;
    public albums: Album[];

    constructor(values: Object ={}){
        Object.assign(this, values);
    }

    // constructor(_id: string, name: string, description: string, imagePath: string, albums: Album[]){
    //     this._id = _id;
    //     this.name = name;
    //     this.description = description;
    //     this.imagePath = imagePath;
    //     this.albums = albums;
    // }

    public get getId(): string{
        return this._id;
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

    public get _albums(): Album[] {
        return this.albums;
    }

    public set _albums(n: Album[]){
        this.albums = n;
    }

}