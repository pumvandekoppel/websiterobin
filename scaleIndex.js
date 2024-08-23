var scaleRatioRock = 220; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioGips = 125.5; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioFountain = 114.3; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioLobsters = 581; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
// var scaleRatioBlock = 83.75; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioBooks = 102; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioPaper = 133; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioPaintings = 80; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
var scaleRatioAbout;

const wrapper = document.getElementsByClassName("wrapper")[0];

const bigTitles = document.querySelectorAll('.wrapper > p');
function scaleIndexToWidth() {
    let width = wrapper.offsetWidth;
    var newScaleXRock = width / scaleRatioRock
    var newScaleXGips = width / scaleRatioGips
    var newScaleXFountain = width / scaleRatioFountain
    var newScaleXLobsters = width / scaleRatioLobsters
    // var newScaleXBlock = width / scaleRatioBlock
    var newScaleXBooks = width / scaleRatioBooks
    var newScaleXPaper = width / scaleRatioPaper
    var newScaleXPaintings = width / scaleRatioPaintings
    var newScaleXAbout = width / scaleRatioAbout
    bigTitles[0].style.transform = "scaleX(" + newScaleXRock +")"
    bigTitles[1].style.transform = "scaleX(" + newScaleXGips +")"
    bigTitles[2].style.transform = "scaleX(" + newScaleXFountain+")"
    bigTitles[3].style.transform = "scaleX(" + newScaleXLobsters +")"
    // bigTitles[4].style.transform = "scaleX(" + newScaleXBlock +")"
    bigTitles[4].style.transform = "scaleX(" + newScaleXBooks +")"
    bigTitles[5].style.transform = "scaleX(" + newScaleXPaper +")"
    bigTitles[6].style.transform = "scaleX(" + newScaleXPaintings +")"
}

scaleIndexToWidth();