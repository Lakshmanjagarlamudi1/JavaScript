// var number = Math.max(2, 4, 5, 1, 6, 9)
// console.log(number); // Prints Max number in object

// var MyObj = {}
// Object.assign(MyObj,{a:1,b:2,c:3},{x:5,y:6,z:7}) // It's a method that assign values to "MyObj"
// console.log(MyObj);

function SpredEx (a ,b) {
    return a + b;
}
var ary = [5,9]
console.log(SpredEx(...ary)); // This is Spread operator
/* Spread operator converts object from array */

// function RestEx (...args){ 
//     console.log(args); // prints [2, 8, 6, 7, 5] 
//     let sum = 0;
//     for(const arg of args ) {
//         sum += arg;
//     }
//     return sum;
// }

// console.log(RestEx(2,8,6,7,5));
// /* Rest operator converts an object into an Array while execution*/

function RestEx (a,b,...args){
    let mult = a * b;
    let sum = 0;
    for(const arg of args ) {
        sum += arg;
    }
    return [sum,mult];
}

console.log(RestEx(2,8,6,7,5)); // Here first two values are treated as a,b and multiply together and prints [18,16]