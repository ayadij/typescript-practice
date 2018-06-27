let array1: number[] = [620,750,900];
let array2: Array<number> = [620,750,900];
let array3: Array<string> = ["620","750","900"];


class objectGenericsClass<TYPE1, TYPE2>{
    constructor(public value1:TYPE1,public value2:TYPE2){

    }
}

let object1 = new objectGenericsClass<string,number>("Hello",2342);
let object2 = new objectGenericsClass<boolean,number>(true, 2342);