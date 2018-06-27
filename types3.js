// specifying types
function cal(val1, val2) {
    var total = val1 + val2;
    return total;
}
cal(2, 2);
// functions as types
var universal;
universal = cal;
console.log(universal(2, 2));
var jello;
var pudding;
// number array
var myNumber;
// typescrip automatically assumes the correct data format (type) for the variable based on it's initial value
// once it is initialized as a string, it cannot later change to a number. 
