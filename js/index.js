// Your code goes here

// Header Section
const header = document.querySelector("header");
const nav = header.querySelector("nav");
const navTags = Array.from(nav.querySelectorAll("a"));

nav.addEventListener("mouseover", function (event){
    event.target.style.color = "red";

setTimeout(function() {
    event.target.style.color = "";
      }, 500);
}, false);

document.addEventListener("keydown", event => {
    if (event.isComposing || event.key === "Escape") {
      return console.log("hello");
    }
});


console.log(header);
console.log(navTags);