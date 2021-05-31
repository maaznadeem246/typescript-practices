class Zebra{
    trot(){}
}

class Poodle{
    trot(){}
}
function ambleAround(animal: Zebra){
    animal.trot()
}

let zebra = new Zebra
let poodle = new Poodle

ambleAround(zebra) //ok
ambleAround(poodle) // Ok because typescript differenciate the class on the basis of structure not on the name

class A2{
     private x = 1
}

class B2 extends A2{}

function f(a: A2){}

f(new A2)
f(new B2)

//f({x: 1}) // its error becuase shape is not instance of that class or subclass