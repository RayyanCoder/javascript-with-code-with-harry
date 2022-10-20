// type of varaibles in js
let name="rayyan";
console.log(name);
let rollno = undefined;
console.log(rollno);
let schoolName = null;
console.log(schoolName);

//diffrent between var and let
// let is for block level it life is block level
// var is a global level 
// we can redeclare var in a program  
var a =10;
var b=20;

// but in let you cannot do it like var in above example  

//diffrent data type in js
// remeber using nn bb ss u
//number,null,undefined,String,BigInt,boolean,Symbol

let aa=10;
let bb=undefined;
let c =BigInt(250);
let d=true;
let e ="rayyan shaikh";
let f =  null;
let g= Symbol('rayyan shaikh abdul majid');
console.log(aa,bb,c,d,e,f,g);

const book={
  name:"let c",
  price:250,
  author:"rayyan shaikh"
}

console.log(book.name);
console.log(book["name"]);

let fname="rayyan";
let lname ="shaikh";
console.log(fname+lname);

let book2={
  name:"rayyan shaikh abdul majid",
  price:300
}

book2.author = "rayyan";
console.log(book2);