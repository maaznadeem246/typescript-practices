interface Animal{
    eat(food:string):void
    sleep(hours: number):void
}



// we can not use the visibility modifiers (private, protected and public) and static in interface

interface Animal{
    readonly name: string
    eat(food:string):void
    sleep(hours: number):void
}



class Cat implements Animal{
    name: string
   constructor(name:string){
       this.name = name
   }
   eat(food: string){
       console.log('Ate some ', food, '. Mmm!')
   }
   sleep(hours: number){
       console.log('Slept for', hours, 'hours')
   }
}




interface Feline{
    newone():void
}




class Cat2 implements Animal, Feline{
    name: string
   constructor(name:string){
       this.name = name
   }
   eat(food: string){
       console.log('Ate some ', food, '. Mmm!')
   }
   sleep(hours: number){
       console.log('Slept for', hours, 'hours')
   }

   newone(){

    console.info("meow")

   }
}
