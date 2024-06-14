var scaleRatio = 260; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
const wrapper = document.getElementsByClassName("wrapper")[0];
const rock = document.getElementById("rockTitle");
const gips = document.getElementById("gipsTitle");
const books = document.getElementById("booksTitle");
const paper = document.getElementById("paperTitle");
// const about = document.getElementById("about");
let width = wrapper.offsetWidth;
var newScaleX;

const bigTitles = document.querySelectorAll('.wrapper > h1');
function scaleToWidth() {
    newScaleX = width / scaleRatio
    console.log(newScaleX)
    bigTitles[0].style.transform = "scaleX(" + newScaleX +")"
    bigTitles[1].style.transform = "scaleX(" + newScaleX +")"
    bigTitles[2].style.transform = "scaleX(" + newScaleX +")"
    bigTitles[3].style.transform = "scaleX(" + newScaleX +")"
    // about.style.transform = "scaleX(" + newScaleX +")"
}

console.log(bigTitles)

scaleToWidth();

window.addEventListener('resize', scaleToWidth);

