

const addId = <T extends object>(obj:T) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id
    }
}

interface UserInterface <T, V>{
    name:string;
    data:T;
    meta: V
}

const user: UserInterface<{meta:string}, string> = {
    name:"jack",
    data:{
        meta:"foo"
    },
    meta: "bar"
}

const user2: UserInterface<string[], string>={
    name:'jhon',
    data:["foo", "bar", "baz"],
    meta:'mnj'
}

const result = addId(user);

console.log("result ", result)