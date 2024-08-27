let pi="";
pi = Number("3.14");
console.log(typeof(pi));

//The unary + operator can be used to convert a variable to a number:

let q="5";
let r= +q;

console.log(typeof(r));

let v="";
v=String(5);
console.log(typeof(v))



//conversation of date to strings
let x= new Date();
x.getTime()
String(Date(x));
console.log(x);

let y= new Date().toString();
console.log(y);