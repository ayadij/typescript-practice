// specifying types

function cal(val1:number, val2:number):number{
    let total:number = val1 + val2;
    return total;
}

cal(2,2)


// functions as types

let universal;
universal = cal;
console.log(universal(2,2));

let jello: (value1: number, value2: number)=> number;
let pudding: ()=>string;



// number array
let myNumber:number[];


// typescrip automatically assumes the correct data format (type) for the variable based on it's initial value
// once it is initialized as a string, it cannot later change to a number. 