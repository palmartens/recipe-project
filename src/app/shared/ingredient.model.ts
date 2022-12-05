export class Ingredient {
    
    // standard way:    
    // -------------
    // public name: string;
    // public amount: number;

    // constructor(name: string, amount: number) {
    //     this.name = name;
    //     this.amount = amount;
    // }
    // -------------

    // shortcut way (thanks to Typescript):  
    constructor(public name: string, public amount:number){}
}