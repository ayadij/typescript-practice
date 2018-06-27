var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Motorcycle = /** @class */ (function () {
    function Motorcycle(name) {
        this.name = name;
    }
    Motorcycle.prototype.rev = function () {
        console.log(this.name + "brap braaap");
    };
    return Motorcycle;
}());
var gixxer = new Motorcycle("Gixxer");
gixxer.rev();
var SportBike = /** @class */ (function (_super) {
    __extends(SportBike, _super);
    function SportBike() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SportBike.prototype.rev = function () {
        console.log("zoooom");
        _super.prototype.rev.call(this);
    };
    return SportBike;
}(Motorcycle));
var yami = new SportBike("Yami");
yami.rev();
