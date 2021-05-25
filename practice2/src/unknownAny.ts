let vAny:any  = 10;

let vUnkown: unknown = 10;

let s1: string  = vAny;
let s2: string  = vUnkown as string;

let pageNumber: string = "1";
let numericPageNumber: number = (pageNumber as unknown) as number; 

