const Products = [{
  name : "A Book",
  price : 3,
},
{
  name : "Tv's",
  price : 100,
},
{
  name : "AC",
  price : 200,
},
{
  name : "Air cooler",
  price : 150,
}
]

function getProducts(){
  const ul = document.querySelector(".list-group");
  ul.innerHTML=""
  Products.forEach(product => {

    const li =document.createElement("li")
    li.classList.add("list-group-item")
    const name = document.createTextNode(product.name);
    li.appendChild(name);
    const span = document.createElement("span");
    span.classList.add("float-right")
    const price = document.createTextNode("$" + product.price);
    span.appendChild(price);
    li.appendChild(span);
    ul.appendChild(li);

  })
}
// getProducts();
window.addEventListener("load",getProducts);
const button = document.querySelector(".sort-btn")
button.addEventListener("click",()=>{
  Products.sort((a,b)=>a.price - b.price);
  getProducts()
});