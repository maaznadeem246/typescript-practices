"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Zebra = /** @class */ (function () {
    function Zebra() {
    }
    Zebra.prototype.trot = function () { };
    return Zebra;
}());
var Poodle = /** @class */ (function () {
    function Poodle() {
    }
    Poodle.prototype.trot = function () { };
    return Poodle;
}());
function ambleAround(animal) {
    animal.trot();
}
var zebra = new Zebra;
var poodle = new Poodle;
ambleAround(zebra); //ok
ambleAround(poodle); // Ok because typescript differenciate the class on the basis of structure not on the name
var A2 = /** @class */ (function () {
    function A2() {
        this.x = 1;
    }
    return A2;
}());
var B2 = /** @class */ (function (_super) {
    __extends(B2, _super);
    function B2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B2;
}(A2));
function f(a) { }
f(new A2);
f(new B2);
//f({x: 1}) // its error becuase shape is not instance of that class or subclass
