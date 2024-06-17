  var scaleRatioRock = 215; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
  var scaleRatioGips = 125.5; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
  var scaleRatioFountain = 109.9; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
  var scaleRatioLobsters = 581; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
  var scaleRatioBlock = 83.75; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
  var scaleRatioBooks = 102.075; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
  var scaleRatioPaper = 133; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
  var scaleRatioPaintings = 80; // if a div is 218.075px wide, the horizontal scale of the text is 1 | 436.15 -> 2 etc
  var scaleRatioAbout;

const scaleThisTitle = document.getElementsByTagName("p")[0]

function vh(percent) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (percent * h) / 100;
}

function vw(percent) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (percent * w) / 100;
}

function scaleTitleToWidth() {
  let width = 3 / 2 * (vh(100) - vw(6)); // 3:2 aspect ratio

  var newScaleX;


  newScaleX = width / scaleRatioRock
  console.log(newScaleX)
  scaleThisTitle.style.transform = "scaleX(" + newScaleX +")"
  // about.style.transform = "scaleX(" + newScaleX +")"
}

scaleTitleToWidth();

window.addEventListener('resize', scaleTitleToWidth);

// zonder wrapper zou zijn: (100vh - 6vw) * 3