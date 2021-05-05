// Your code goes here


// Document Events
        // Keydown Event
document.addEventListener("keydown", event => {
    if (event.isComposing || event.key === "Escape") {
      return console.log("hello");
    }
});

        // Wheel Event
document.addEventListener('wheel', event => console.log(`${event} was activated`));

// Header Section

        // Mouseover Event
const header = document.querySelector("header");
const nav = header.querySelector("nav");
const navTags = Array.from(nav.querySelectorAll("a"));

nav.addEventListener("mouseover", function (event){
    event.target.style.color = "red";

setTimeout(function() {
    event.target.style.color = "";
      }, 1000);
}, false);



console.log(header);
console.log(navTags);

// header.addEventListener("load", function (event){
//     console.log("the page has loaded successfully")
// })
