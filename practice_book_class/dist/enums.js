"use strict";
var Language;
(function (Language) {
    Language[Language["English"] = 0] = "English";
    Language[Language["Spanish"] = 1] = "Spanish";
    Language[Language["Russian"] = 2] = "Russian";
})(Language || (Language = {}));
console.log(Language['Russian']);
var Language2;
(function (Language2) {
    Language2[Language2["English"] = 0] = "English";
    Language2[Language2["Spanish"] = 1] = "Spanish";
    Language2[Language2["Russian"] = 2] = "Russian";
})(Language2 || (Language2 = {}));
var Language3;
(function (Language3) {
    Language3[Language3["English"] = 0] = "English";
    Language3[Language3["Spanish"] = 1] = "Spanish";
})(Language3 || (Language3 = {}));
var Language4;
(function (Language4) {
    Language4[Language4["Russian"] = 2] = "Russian";
})(Language4 || (Language4 = {}));
var Language5;
(function (Language5) {
    Language5[Language5["English"] = 100] = "English";
    Language5[Language5["Spanish"] = 500] = "Spanish";
    Language5[Language5["Russian"] = 501] = "Russian";
})(Language5 || (Language5 = {}));
var Color2;
(function (Color2) {
    Color2["Red"] = "#c10000";
    Color2["Blue"] = "#007ac1";
    Color2[Color2["Pink"] = 12648528] = "Pink";
    Color2[Color2["White"] = 255] = "White";
})(Color2 || (Color2 = {}));
var red = Color2.Red;
var pink = Color2.Pink;
var a = Color2.Red;
// let b = Color2.Green //its error
var c = Color2[0];
console.log(a);
console.log(c);
var al = 0 /* English */;
function flip(f) {
    console.log(f);
    return "Fliped it!";
}
flip(1 /* Chair */);
flip(2 /* Cup */);
flip(12); // this should not be working but it works and its wrong
function flip2(f) {
    return "flipped it";
}
flip2("Chair" /* Chair */);
flip2("Cup" /* Cup */);
// flip2(12)  // using const u will have to provide just string
