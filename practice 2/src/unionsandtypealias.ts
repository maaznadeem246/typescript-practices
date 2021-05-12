type ID = string;
type populerTag = string;
type MaybePopulerTag = populerTag | null;

interface UserInterface {
    id : ID;
    name: string;
    surname: string;
}

const populerTags : populerTag[] = ['dragon', 'coffe']

const dragonsTag : MaybePopulerTag = "dragon"

let username: string = "alex";

let pagename: string | number = "1";

let errorMessage :  string | null = null;

let usera: UserInterface | null  = null;

