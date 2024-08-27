
//a loop in a set of elements 

const iterable=[10,20,30];
for (let x of iterable) {
    x += 1;
    console.log(x);
}

/*examples of iterables are arryas,strings, sets ,maps
where is iterable used
for...Of
yield*
spread operator(ES6)
object is not iterable by default
uses different protocol with spread operator
*/

let arr1=[0,1,2];
let arr2=[3,4,5];
arr1=[...arr1,...arr2];
console.log(arr1);

