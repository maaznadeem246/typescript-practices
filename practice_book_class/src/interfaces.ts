type Sushi = {
    calories: number
    salty:boolean
    tasty: boolean
}


interface SushiIntfa{
    calories: number
    salty: boolean
    tasty: boolean
}


type Cake = {
    calories: number
    sweet: boolean
    tasty: boolean
}


type Food = {
    calories:number
    tasty:boolean
}

type Sushi2 = Food & {
    salty: boolean
}

type Cake2 = Food & {
    sweet: boolean
}


interface Food2{
    calories: number
    tasty: boolean
}

interface SushiIntfa2 extends Food2{
    salty: boolean
}

interface Cake3 extends Food2{
    sweet: boolean
}


type A = number
type B = A | string

interface Aintfa {
    good(x: number): string
    bad(x: number):string
}



// interface Bintfa extends Aintfa{
//     good(x: string | number): string
//     bad(x:string): string
// }