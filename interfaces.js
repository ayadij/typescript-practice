var motorcycle = {
    make: "ducati",
    model: "monster",
    cc: 750,
    describeBike: function (make, cc) {
        console.log("this " + this.make + " is " + cc + "cc");
    }
};
// syntax to apply an interface to the Class
var MotorcycleClass = /** @class */ (function () {
    function MotorcycleClass() {
    }
    MotorcycleClass.prototype.describeBike = function (make, cc) {
    };
    return MotorcycleClass;
}());
