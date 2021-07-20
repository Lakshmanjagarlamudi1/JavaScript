const person1 = () => {
    return "I am the first person"
}
// const person2 = () => {
//     setTimeout( ()=>{
//         Promise(resol)
//         return "I am the second person";
//     },3000)
// }
const person2 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve("I am second person")
        },3000)
    })
}

const person3 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve('I am the third person')
        },3000)
    })
}


const values = async () => {
    let val1 = person1();
    console.log(val1);

    let val2 = await person2();
    console.log(val2);

    let val3 = await person3();
    console.log(val3);
}
values();

