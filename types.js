var Shark = /** @class */ (function () {
    function Shark() {
        this.name = "Moa";
        this.saying = Shark.motorcycle;
    }
    Shark.prototype.hello = function (person) {
        console.log("Hello, " + person);
    };
    Shark.motorcycle = "SV650";
    return Shark;
}());
var aya = new Shark();
aya.saying = "ATGATT";
//console.log(Shark.motorcycle);
aya.hello("David");
