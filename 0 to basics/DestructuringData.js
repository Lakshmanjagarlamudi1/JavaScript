const Subject = ["Machie Learning","Hands-On Machine Learning",599];
//Method 1:
/*console.log(Subject[0]); //prints "Machie Learning"
console.log(Subject[1]); //prints "Hands-On Machine Learning"
console.log(Subject[2]); //prints "599"
*/

//Method 2:
/*var [subjectName,bookName,bookCost] = Subject;
console.log(bookName); // prints "Hands-On Machine Learning"
*/
const subject2 = {
    subjectName : "Data-science",
    bookName : "Head First Statistics",
    bookCost : 499,
}
console.log(subject2.bookCost);

// var {subjectName,AbookName,bookCost} = subject2;
// console.log(AbookName); // Prits Nothing means undefined;

var {subjectName,bookName,bookCost} = subject2;
console.log(bookName); // Prits "Head First Statistics"
