"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var _a, e_1, _b;
// optional parameter
function log(message, userId) {
    var time = new Date().toLocaleDateString();
    console.log(time, message, userId || ' Not signed in');
}
log('Page Loaded');
log('user Signed in', 'da763be');
// Default parameters
function log2(message, userId) {
    if (userId === void 0) { userId = 'Not signed in'; }
    var time = new Date().toLocaleDateString();
    console.log(time, message, userId);
}
log2('user clicked on a button', 'da763be');
log2('User signed out');
// Rest Parameters
function sum(numbers) {
    return numbers.reduce(function (total, n) { return total + n; }, 0);
}
sum([1, 2, 3]); // evaluates to 6
function sumVariadic() {
    return Array
        .from(arguments)
        .reduce(function (total, n) { return total + n; }, 0);
}
// it is creating error becuase in decelaration we have not defined parameters
// sumVariadic(1,2,3) 
function sumVariadicSafe() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return Array
        .from(arguments)
        .reduce(function (total, n) { return total + n; }, 0);
}
sumVariadicSafe(1, 2, 3); // evaluates to 6
// rest parameters should be last parameter if you have more then one parameter in the function
function fancyDate() {
    return this.getDate() + "/" + this.getMonth() + "/" + this.getFullYear();
}
fancyDate.call(new Date);
// it generates error 
// fancyDate() 
// Generator Functions / Generators
function createFibonacciGenerator() {
    var a, b;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                a = 0;
                b = 1;
                _b.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, a];
            case 2:
                _b.sent();
                _a = __read([b, a + b], 2), a = _a[0], b = _a[1];
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var fibonacciGenerator = createFibonacciGenerator();
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
console.log(fibonacciGenerator.next());
function createNumbers() {
    var a, b;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                a = 0;
                b = 1;
                _b.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, a];
            case 2:
                _b.sent();
                _a = __read([b, a + b], 2), a = _a[0], b = _a[1];
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var numbers = createNumbers();
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
// 
var numbers2 = (_a = {},
    _a[Symbol.iterator] = function () {
        var n;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    n = 1;
                    _a.label = 1;
                case 1:
                    if (!(n <= 10)) return [3 /*break*/, 4];
                    return [4 /*yield*/, n];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    n++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    },
    _a);
try {
    for (var numbers2_1 = __values(numbers2), numbers2_1_1 = numbers2_1.next(); !numbers2_1_1.done; numbers2_1_1 = numbers2_1.next()) {
        var a_1 = numbers2_1_1.value;
        console.log(a_1);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (numbers2_1_1 && !numbers2_1_1.done && (_b = numbers2_1.return)) _b.call(numbers2_1);
    }
    finally { if (e_1) throw e_1.error; }
}
var allNumbers = __spreadArray([], __read(numbers2));
console.log(allNumbers);
var _c = __read(numbers2), one = _c[0], two = _c[1], rest = _c.slice(2);
console.log('one ', one, ' two ', two, ' rest', rest);
var logDub = function (message, userId) {
    if (userId === void 0) { userId = 'Not signed in'; }
    var time = new Date().toLocaleDateString();
    console.log(time, message, userId);
};
var reserve = function (from, toOrdestination, destination) {
    if (toOrdestination instanceof Date && destination !== undefined) {
    }
    else if (typeof toOrdestination === 'string') {
    }
    return "fdfd";
};
var filter = function (array, f) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
};
filter([1, 2, 3], function (_) { return _ > 2; });
var names = [
    { firstName: 'beth' },
    { firstName: 'caitlyn' },
    { firstName: 'xin' }
];
filter(names, function (_) { return _.firstName.startsWith('b'); });
var filter1 = function () {
    return [];
};
var filter2 = function () {
    return [];
};
var filter3 = function () {
    return [];
};
var filter4 = function () {
    return [];
};
// Generic Type Inference
var promise = new Promise(function (resolve) { return resolve(45); });
promise.then(function (result) { return result * 4; });
var myEvnt = {
    target: document.querySelector("#myButton"),
    type: 'click'
};
function triggerEvent(event) {
    //
}
triggerEvent({
    target: document.querySelector('#myEvent'),
    type: 'mouseover'
});
var a = { value: 'a' };
var b = { value: 'b', isLeaf: true };
var c = { value: 'c', children: [b] };
// let a1 = mapNode(a, _=>_.toUpperCase())
// let b1 = mapNode(b, _=>_.toUpperCase())
// let c1 = mapNode(c, _=>_.toUpperCase())
