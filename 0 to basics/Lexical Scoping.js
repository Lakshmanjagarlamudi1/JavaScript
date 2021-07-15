// function init() {
//     var firstName = "Lakshman";
//     function SayAgain(){
//         console.log(firstName)
//     }
//     SayAgain();
// }
// init()
// console.log(firstName);

/*It'll displays an error like firstName is not defined 
because the firstName is only available from line no 2 to line no 5. After that it will clouser
So the error will appear while we run this code exactly

We can correct these error. Let see in example*/

function doAddition(x){
    return function(y){
        return x+y;
    }
}
var num = doAddition(5);
console.log(num(5));

/* We can also use another method */

console.log(doAddition(10)(10));  //This topic is known as curring and this method replaces aboe line number 22&23.