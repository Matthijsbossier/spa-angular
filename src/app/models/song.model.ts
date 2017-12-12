export class Song {
    
    public _id: string;
    public name: string;
    public number: number;
    public length: string;


    constructor(_id: string, name: string, number: number, length: string){
        this._id = _id;
        this.name = name;
        this.number = number;
        this.length = length;
    }


    public get _name(): string {
        return this.name;
    }

    public set _name(n : string ){
        this.name = n;
    }

    public get _number(): number {
        return this.number;
    }

    public set _number(n: number){
        this.number = n;
    }

    public get _length(): string {
        return this.length;
    }

    public set _length(n: string) {
        this.length = n;
    }
}