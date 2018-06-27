var array1 = [620, 750, 900];
var array2 = [620, 750, 900];
var array3 = ["620", "750", "900"];
var objectGenericsClass = /** @class */ (function () {
    function objectGenericsClass(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }
    return objectGenericsClass;
}());
var object1 = new objectGenericsClass("Hello", 2342);
var object2 = new objectGenericsClass(true, 2342);
