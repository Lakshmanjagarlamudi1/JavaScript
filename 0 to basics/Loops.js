var persons = [
  "Lakshman",
  "Prabu",
  1999,
  "Hemanth",
  2001,
  "Manideep",
  "Yeshwanth",
];

// for (let i = 0; i < persons.length; i++) {
//     if (typeof persons[i] !== 'string') continue;
//     console.log(persons[i])
// }

// let i=0;
// while(i < persons.length){
//     console.log(persons[i]);
//     i++;
// }

//persons.forEach(s=>console.log(s));


for(const n of persons){
    console.log(n);
}

const user = {
    firstName:"lakshman",
    lastName : "Jagarlamudi",
    mobile : 9381598525,
    gender : "Male"
}
for(const n in user){
    console.log(`Key is: ${n}, And Value is: ${user[n]}`);
}