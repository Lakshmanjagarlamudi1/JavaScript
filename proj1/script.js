var members = document.getElementById("counter");
var followers = document.getElementById("followers");

let count = 1;
setInterval(() => {
  if (count < 200) {
    count++;
    members.innerText = count;
  }
}, 10);

setTimeout(()=>{
    followers.innerText = "Followers in instagram";
},2200)