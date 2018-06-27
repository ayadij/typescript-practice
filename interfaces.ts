interface MotorcycleInterface{
    make: string;
    model?: string;
    cc: number;
    describeBike(make:string, cc:number):void
}

const motorcycle: MotorcycleInterface = {
    make: "ducati",
    model: "monster",
    cc: 750,
    describeBike(make:string,cc:number){
        console.log(`this ${this.make} is ${cc}cc`);
    }
}

// syntax to apply an interface to the Class
class MotorcycleClass implements MotorcycleInterface {
    make: string;
    model?: string; //question mark makes it optional
    cc: number;
    describeBike(make:string,cc:number):void {

    }
}