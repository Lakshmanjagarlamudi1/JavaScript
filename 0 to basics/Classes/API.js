fetch("https://api.chucknorris.io/jokes/random")
.then((responce)=>{
    console.log(responce.json());
})
.then((data)=>{
    var joke = data.value;
    console.log(joke);
})
.catch()

//NOTE : It doesn't run with node
// We have run it in web console