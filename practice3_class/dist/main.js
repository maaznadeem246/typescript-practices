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
var User = /** @class */ (function () {
    function User(firstname, lastName) {
        this.firstName = firstname;
        this.lastName = lastName;
        this.unchangeableName = firstname;
    }
    User.prototype.changeUnchangeableName = function () {
        // this.unchangeableName = "foo"
    };
    User.prototype.getFullname = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User.maxAge = 50;
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstname, lastName) {
        var _this = _super.call(this, firstname, lastName) || this;
        _this.editor = "Empty";
        return _this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var user = new User('Monster', "lessons");
console.log(user.getFullname());
console.log(User.maxAge);
var admin = new Admin('foo', 'Bar');
console.log(admin.getEditor());
admin.setEditor('test editor');
console.log(admin.getEditor());
