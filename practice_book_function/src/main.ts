// optional parameter
function log(message:string, userId?:string){
    let time = new Date().toLocaleDateString()
    console.log(time,message, userId || ' Not signed in')
}

log('Page Loaded') 
log('user Signed in', 'da763be')


// Default parameters
function log2(message: string, userId='Not signed in'){
    let  time = new Date().toLocaleDateString()
    console.log(time, message, userId)
}

log2('user clicked on a button', 'da763be')
log2('User signed out')



// Rest Parameters

function sum(numbers: number[]):number{
    return numbers.reduce((total,n) => total + n , 0)
}

sum([1,2,3]) // evaluates to 6


function sumVariadic(): number{
    return Array
    .from(arguments)
    .reduce((total, n) => total + n, 0)
}

// it is creating error becuase in decelaration we have not defined parameters
// sumVariadic(1,2,3) 


function sumVariadicSafe(...numbers: number[]): number{
    return Array
    .from(arguments)
    .reduce((total, n) => total + n, 0)
}

sumVariadicSafe(1,2,3) // evaluates to 6

// rest parameters should be last parameter if you have more then one parameter in the function




function fancyDate(this:Date){
    return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
}

fancyDate.call(new Date)

// it generates error 
// fancyDate() 


// Generator Functions / Generators

function* createFibonacciGenerator(){
    let a = 0
    let b = 1
    while(true){
        yield a;
        [a, b] = [b, a+b]
    }
}


let fibonacciGenerator =  createFibonacciGenerator()

console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())




function* createNumbers(): IterableIterator<number>{
    let a = 0
    let b = 1
    while(true){
        yield a;
        [a, b] = [b, a+b]
    }
}


let numbers =  createNumbers()


console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())



// 

let numbers2 ={
    *[Symbol.iterator](){
        for(let n=1; n<=10; n++){
            yield n
        }
    }
}


for(let a of numbers2){
    console.log(a)
}

let allNumbers = [...numbers2];

console.log(allNumbers)

let [one, two, ...rest] = numbers2;

console.log('one ',one,' two ',two, ' rest', rest)



// Call signature for functions


type LogDub = (message: string, uesrId?: string) => void

let logDub:LogDub =(message,userId='Not signed in')=>{
    let time = new Date().toLocaleDateString()
    console.log(time, message, userId)
}   


type Reservation = void

// overloaded function

type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string) : Reservation
}


let reserve: Reserve = (from : Date, toOrdestination: Date|string, destination?:string) => {
    if(toOrdestination instanceof Date && destination !== undefined){

    }else if(typeof toOrdestination === 'string'){

    }

    return "fdfd"
}


type CreateElement = {
    (tag:'a'): HTMLAnchorElement
    (tag:'canvas'): HTMLCanvasElement
    (tag:'table'): HTMLTableElement
    (tag:string): HTMLElement

}

// let createElement : CreateElement = (tag:string) : HTMLElement => {
//       return ''
// }




// polymorphism





// type Filter = {
//     (array:unknown, f: unknown) : unknown[]
// }

// let names = [
//     {firstName:'beth'},
//     {firstName:'caitlyn'},
//     {firstName:'xin'}
// ]

// type Filter = {
//     (array:number[], f: (item:number)=>boolean) : number[]
//     (array:string[], f:(item:string)=>boolean):string[]
//     (array:object[],f:(item:object)=>boolean): object[]
// }


// let filter:Filter = (array, f) =>{
//     let result:number[] = []
//     for(let i =0; i< array.length;i++){
//         let item = array[i]
//         if(f(item)){
//             result.push(item)
//         }
//     }
//     return result
// }

// filter([1,2,3,4],_=>_<3)

// let result2 = filter(names,_=>_.firstName.s)



type Filter = {
    <T>(array: T[], f:(item:T)=>boolean): T[]
}

let filter : Filter = (array, f) => {
    let result=[]
        for(let i =0; i< array.length;i++){
            let item = array[i]
            if(f(item)){
                result.push(item)
            }
        }
        return result
    }

filter([1,2,3],_=>_>2)

let names = [
    {firstName:'beth'},
    {firstName:'caitlyn'},
    {firstName:'xin'}
]

filter(names, _=>_.firstName.startsWith('b')) 