enum Language{
    English,
    Spanish,
    Russian
}

console.log(Language['Russian'])


enum Language2{
    English = 0,
    Spanish = 1,
    Russian = 2,
}

enum Language3{
    English = 0,
    Spanish = 1,
}

enum Language4{
    Russian = 2,
}


enum Language5{
    English = 100,
    Spanish = 200 + 300,
    Russian
}


enum Color2{
    Red = '#c10000',
    Blue = "#007ac1",
    Pink = 0xc10050,
    White = 255,
}

let red = Color2.Red;
let pink = Color2.Pink;

let a = Color2.Red
// let b = Color2.Green //its error

let c = typeof Color2[0]

console.log(a)
console.log(c)