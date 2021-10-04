// Basic Types
const idp5 : number = 5;
let companyp5: string = "Traversy Media";
let isPulbished: boolean = true;
let x: any = "hello";

let ids: number[] = [1,2,3,4,5];

// ids.push('Hello');

// Tuple
let person:[number, string, boolean] = [1,'Brad',true];

// Tuple Array

let employee:[number, string][]

employee = [
    [1,'Brad'],
    [2,'Jhon'],
    [3,'Jill'],
]


//Union
let pid:string | number = 22;
pid = "22";

//Enum
enum Direction1{
    Up,
    Down,
    Left,
    Right,
}

// console.log(Direction1.Up)

enum Direction2{
    Up="Up",
    Down="Down",
    Left="Left",
    Right="Right",
}

// console.log(Direction2.Up)


//Objects

type User = {
    id:number,
    name:string,
}

const user: User = {
    id:1,
    name:'Jhon',
}

// Type Assertion

let cid:any = 1;
// let custormerId = <Number>cid
let custormerId = cid as number;


// Functions
function addNumber(x:number, y:number): number{
    return  x+y;
}

// console.log(addNumber(1,3));

function log(message: string | number):void {
    console.log(message)
}


// log('hello')


// Interfaces

interface UesrInterface{
    id: number,
    name : string,
}

const uesr1: UesrInterface = {
    id:4,
    name:'jhon'
}


type Point = number | string

const p1:Point = 1;


interface MathFunc{
    (x:number, y:number): number
}

const add: MathFunc = (x:number, y:number): number => x+y;
const sub: MathFunc = (x:number, y:number): number => x-y;


interface PersonInterface{
    id:number
    name:string
    register():string
}

// Classes

class Person implements PersonInterface{
    id:number
    name:string

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }

    register(){
        return `${this.name} is now Registered`;
    }

}

const brad = new Person(1,"Brad Traversy")
const mike = new Person(2,"Mike Jorden")

console.log(brad.register())
console.log(brad, mike)


// Subclass
class Employee extends Person{
    position:string
    constructor(id:number, name:string, postion:string){
        super(id,name)
        this.position = postion
    }
 

    
}

const emp = new Employee(3,"Shawn",'Developer')

console.log(emp.register())



// Generics 

function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad','John','Jill']);

// strArray.push('hello')