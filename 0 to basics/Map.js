var Movies = new Map();
Movies.set(1,"KGF2"); //Syntex : set(key:any,Value:any) it can creates an object
Movies.set(2,"Indian2");
Movies.set(3,"RRR");
Movies.set(4,"Valimai");
Movies.set(5,"Beast");

console.log(Movies);    //Prints Map(5) {1 => "KGF2", 2 => "Indian2", 3 => "RRR", 4 => "Valimai", 5 => "Beast"}

//MAP the all Keys using "Map"

for(let key of Movies.keys()){
    console.log(`Keys are ${key}`); //Prints All keys(1 2 3 4 5) in a line
}

//MAP all values using "MAP"
for(let value of Movies.values()) {
    console.log(`Values are ${value}`);// prints all Movies Names
}

//Now we'll print both keys and values together using "MAP"
for(let [key,value] of Movies) {
    console.log(`Key is ${key} and Value is ${value}`);
}
