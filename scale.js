function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
  }
  
  function vw(percent) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
  }

var scaleRatio = 220.075; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
const longestTitle = document.getElementById("rockTitle");

// const about = document.getElementById("about");
let width = 3 * 0.5* (vh(100) - vw(6));
console.log("width is"+width)
var newScaleX;

function scaleToWidth() {
    newScaleX = width / scaleRatio
    console.log(newScaleX)
    bigTitle.style.transform = "scaleX(" + newScaleX +")"
    // about.style.transform = "scaleX(" + newScaleX +")"
}

console.log(bigTitle)

scaleToWidth();

window.addEventListener('resize', scaleToWidth);

// zonder wrapper zou zijn: (100vh - 6vw) * 3