var scaleRatioRock = 215; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioGips = 125.5; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioFountain = 109.9; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioLobsters = 581; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioBlock = 83.75; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioBooks = 102.075; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioPaper = 133; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioPaintings = 80; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioAbout;

const wrapper = document.getElementsByClassName("wrapper")[0];



const bigTitles = document.querySelectorAll('.wrapper > p');
function scaleIndexToWidth() {
    let width = wrapper.offsetWidth;
    var newScaleXRock;
    var newScaleXGips;
    var newScaleXFountain;
    var newScaleXLobsters;
    var newScaleXBlock;
    var newScaleXBooks;
    var newScaleXPaper;
    var newScaleXPaintings;
    newScaleXRock = width / scaleRatioRock
    newScaleXGips = width / scaleRatioGips
    newScaleXFountain = width / scaleRatioFountain
    newScaleXLobsters = width / scaleRatioLobsters
    newScaleXBlock = width / scaleRatioBlock
    newScaleXBooks = width / scaleRatioBooks
    newScaleXPaper = width / scaleRatioPaper
    newScaleXPaintings = width / scaleRatioPaintings
    bigTitles[0].style.transform = "scaleX(" + newScaleXRock +")"
    bigTitles[1].style.transform = "scaleX(" + newScaleXGips +")"
    bigTitles[2].style.transform = "scaleX(" + newScaleXFountain+")"
    bigTitles[3].style.transform = "scaleX(" + newScaleXLobsters +")"
    bigTitles[4].style.transform = "scaleX(" + newScaleXBlock +")"
    bigTitles[5].style.transform = "scaleX(" + newScaleXBooks +")"
    bigTitles[6].style.transform = "scaleX(" + newScaleXPaper +")"
    bigTitles[7].style.transform = "scaleX(" + newScaleXPaintings +")"
    // about.style.transform = "scaleX(" + newScaleX +")"
    console.log("hallo")
}

// function reloadCss()
// {
//     var link = document.getElementsByTagName("link")[0];
//     if (link.rel === "stylesheet") {
//         link.href += "";
//     }
// }

function resizeAndReload() {
    scaleIndexToWidth();
    // reloadCss();
}


scaleIndexToWidth();

window.addEventListener('resize', resizeAndReload);
