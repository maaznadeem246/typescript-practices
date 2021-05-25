interface User {
    name: string,
    age?: number,
    getMessage():string
}

const user:User ={
    name:"Monster",
    age:30,
    getMessage(){
        return "hello"+user.name
    }
}   

const user2:User = {    
    name:"jake",
    getMessage(){
        return "hello"+user.name
    }
}

console.log(user.name)

let ar : [number] = [123]