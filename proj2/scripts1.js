const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor);

const colors = (selectItems) => {
    return window.getComputedStyle(selectItems).backgroundColor;
}
// var allColors = colors(orange);

// orange.addEventListener("mouseenter", ()=>{
//     center.style.background = allColors;
// })

var getAllColors = (element,allColors) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = allColors;
    })
}
getAllColors(red,colors(red));
getAllColors(cyan,colors(cyan));
getAllColors(violet,colors(violet));
getAllColors(orange,colors(orange));
getAllColors(pink,colors(pink));
