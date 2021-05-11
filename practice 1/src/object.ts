var aa: {
    b:Number,
    c?:string,
    [key:number]:boolean,
}

aa = {b: 1}
console.log(aa)

aa = {b:1, c:undefined}
console.log(aa)

aa = {b:1, c:'d'}
console.log(aa)

aa = {b: 1, 10:true, 20:false}
console.log(aa)

//aa = {10:true}
//console.log()