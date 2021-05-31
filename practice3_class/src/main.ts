interface UserInterface{
    getFullname():string;

}

class User implements UserInterface {
    private firstName: string 
    private lastName: string 
    readonly unchangeableName: string
    static readonly maxAge = 50;
    constructor(firstname:string, lastName:string){
        this.firstName = firstname
        this.lastName = lastName
        this.unchangeableName = firstname
    }

    changeUnchangeableName():void{
        // this.unchangeableName = "foo"
    }
   
    getFullname():string{
        return this.firstName + ' ' + this.lastName;
    }
}


class Admin extends User{
    private editor: string;
    constructor(firstname:string, lastName:string){
        super(firstname, lastName)
        this.editor = "Empty"
    }
    setEditor(editor:string):void{
        this.editor = editor
    }

    getEditor(): string{
        return this.editor
    }

}

const user = new User('Monster', "lessons")

console.log(user.getFullname())
console.log(User.maxAge )

const admin = new Admin('foo','Bar')

console.log(admin.getEditor())
admin.setEditor('test editor')
console.log(admin.getEditor())