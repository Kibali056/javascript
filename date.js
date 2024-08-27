const d = new Date("2024-08-5");
console.log(d);

const r = new Date("2018,september");
console.log(r);

const v = new Date("2024-08-13 14:27:54");
console.log(v);

document.getElementById("time").textContent= `${v}`;

/*JavaScript counts months from 0 to 11:

January = 0.

December = 11.

Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
*/
const a = new Date (2018,15,24,10,33,30);
console.log(a);
document.getElementById("time_2").textContent=`${a}`;


/* You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
*/

const f= new Date(2024);
console.log(f);

/*One and two digit years will be interpreted as 19xx:*/
const g = new Date(99, 11, 24);
console.log(g);

const h = new Date("2018-12-05");
d.toISOString(h);
console.log(h);

