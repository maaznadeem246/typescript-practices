"use strict";
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.eat = function (food) {
        console.log('Ate some ', food, '. Mmm!');
    };
    Cat.prototype.sleep = function (hours) {
        console.log('Slept for', hours, 'hours');
    };
    return Cat;
}());
var Cat2 = /** @class */ (function () {
    function Cat2(name) {
        this.name = name;
    }
    Cat2.prototype.eat = function (food) {
        console.log('Ate some ', food, '. Mmm!');
    };
    Cat2.prototype.sleep = function (hours) {
        console.log('Slept for', hours, 'hours');
    };
    Cat2.prototype.newone = function () {
        console.info("meow");
    };
    return Cat2;
}());
