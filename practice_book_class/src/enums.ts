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

let c = Color2[0]

console.log(a)
console.log(c)


const enum Language6{
    English,
    Spanish,
    Russian
}

let al = Language6.English

// let b = Language.tagalog 


// let cl = Language6[0]



const enum Flipable{
    Burger,
    Chair, Cup,
    Skateboard,
    Table,
}



function flip(f: Flipable){
    console.log(f)
    return "Fliped it!"
}


flip(Flipable.Chair)
flip(Flipable.Cup)
flip(12) // this should not be working but it works and its wrong


const enum Flipable2{
    Burger = "Burger",
    Chair = "Chair", 
    Cup = "Cup",
    Skateboard = "Skateboard",
    Table = "Table",
}

function flip2(f: Flipable2){
    return "flipped it"
}


flip2(Flipable2.Chair)
flip2(Flipable2.Cup)
// flip2(12)  // using const u will have to provide just string


