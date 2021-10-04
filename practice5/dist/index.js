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
// Basic Types
var idp5 = 5;
var companyp5 = "Traversy Media";
var isPulbished = true;
var x = "hello";
var ids = [1, 2, 3, 4, 5];
// ids.push('Hello');
// Tuple
var person = [1, 'Brad', true];
// Tuple Array
var employee;
employee = [
    [1, 'Brad'],
    [2, 'Jhon'],
    [3, 'Jill'],
];
//Union
var pid = 22;
pid = "22";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Up)
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
var user = {
    id: 1,
    name: 'Jhon',
};
// Type Assertion
var cid = 1;
// let custormerId = <Number>cid
var custormerId = cid;
// Functions
function addNumber(x, y) {
    return x + y;
}
// console.log(addNumber(1,3));
function log(message) {
    console.log(message);
}
var uesr1 = {
    id: 4,
    name: 'jhon'
};
var p1 = 1;
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return this.name + " is now Registered";
    };
    return Person;
}());
var brad = new Person(1, "Brad Traversy");
var mike = new Person(2, "Mike Jorden");
console.log(brad.register());
console.log(brad, mike);
// Subclass
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, postion) {
        var _this = _super.call(this, id, name) || this;
        _this.position = postion;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, "Shawn", 'Developer');
console.log(emp.register());
// Generics 
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(['brad', 'John', 'Jill']);
// strArray.push('hello')
