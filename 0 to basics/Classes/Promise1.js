const person1 = () => {
    console.log('I am the first person');
}
const person2 = () => {
    setTimeout( async()=>{
        return console.log("Sorry for the late")
    },3000)
    console.log('I am the second person');
}
const person3 = () => {
    console.log('I am the third person');
}
const person4 = () => {
    console.log('I am the fourth person');
}

person1();
person3();
person4();
person2();