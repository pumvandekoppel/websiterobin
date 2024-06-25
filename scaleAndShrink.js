var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

var scaleRatioRock = 215; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioGips = 125.5; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioFountain = 109.9; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioLobsters = 581; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioBlock = 83.75; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioBooks = 102.075; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioPaper = 133; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioPaintings = 80; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioAbout;

const img = document.getElementsByTagName("img")[0]

const scaleThisTitle = document.getElementsByTagName("p")[0]
const shrinkThisBigTitle = document.getElementsByTagName("p")[0]

function vh(percent) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (percent * h) / 100;
}
function vw(percent) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (percent * w) / 100;
}

var newScaleX;

function scaleTitleToWidth() {
  let width = img.width
  var newScaleXRock;
  var newScaleXGips;
  var newScaleXFountain;
  var newScaleXLobsters;
  var newScaleXBlock;
  var newScaleXBooks;
  var newScaleXPaper;
  var newScaleXPaintings;
  var newScaleXAbout;
  newScaleXRock = width / scaleRatioRock
  newScaleXGips = width / scaleRatioGips
  newScaleXFountain = width / scaleRatioFountain
  newScaleXLobsters = width / scaleRatioLobsters
  newScaleXBlock = width / scaleRatioBlock
  newScaleXBooks = width / scaleRatioBooks
  newScaleXPaper = width / scaleRatioPaper
  newScaleXPaintings = width / scaleRatioPaintings
  var newScaleXAbout = width / scaleRatioAbout
  if (document.getElementById('rock')) {
    scaleThisTitle.style.transform = "scaleX(" + newScaleXRock +")"
    newScaleX = newScaleXRock
    return newScaleX
  }
  if (document.getElementById('gips')) {
    scaleThisTitle.style.transform = "scaleX(" + newScaleXGips +")"
    newScaleX = newScaleXGips
    return
  }  
  if (document.getElementById('fountain')) {
    scaleThisTitle.style.transform = "scaleX(" + newScaleXFountain +")"
    newScaleX = newScaleXFountain
    return newScaleX
  }  
  if (document.getElementById('lobsters')) {
    scaleThisTitle.style.transform = "scaleX(" + newScaleXLobsters +")"
    newScaleX = newScaleXLobsters
    return newScaleX
  }  
  if (document.getElementById('block')) {
    scaleThisTitle.style.transform = "scaleX(" + newScaleXBlock +")"
    newScaleX = newScaleXBlock
    return newScaleX
  }  
  if (document.getElementById('books')) {
    scaleThisTitle.style.transform = "scaleX(" + newScaleXBooks +")"
    newScaleX = newScaleXBooks
    return newScaleX
  }  
  if (document.getElementById('paper')) {
    scaleThisTitle.style.transform = "scaleX(" + newScaleXPaper +")"
    newScaleX = newScaleXPaper
    return newScaleX
  }  
  if (document.getElementById('paintings')) {
    scaleThisTitle.style.transform = "scaleX(" + newScaleXPaintings +")"
    newScaleX = newScaleXPaintings
    return newScaleX
  }  
  if (document.getElementById('about')) {
    scaleThisTitle.style.transform = "scaleX(" + newScaleXAbout +")"
    newScaleX = newScaleXAbout
    return newScaleX
  }

}

scaleTitleToWidth();

// transition from scaleX (from scale.js) to 0 when scrolling from top to bottom
window.addEventListener("scroll", function () {
    // amount of pixels scrolled
    const pixels = window.scrollY
  
    // // difference in scaleX to travel when scrolling | destination = 1, start = scaleX
    // const difference = newScaleX - 1
    // // shrink Scale x
    // var shrinkScaleX = newScaleX - (difference*(pixels+(pixels/(height-vh(100)))*vh(100)))/height
    // shrinkThisBigTitle.style.transform = "scaleX(" + shrinkScaleX + ")"
  
    // reduce font-weight
    const fontWeight = 700 - ((pixels/(height-vh(100)))*vh(100) * 0.3)
    shrinkThisBigTitle.style.fontVariationSettings = "'wght' "  + fontWeight
});

window.addEventListener('resize', scaleTitleToWidth);
