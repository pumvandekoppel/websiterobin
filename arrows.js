// collect sections
let sections = document.getElementsByTagName("section");
//// for each section store id in new array sectionIDs
let sectionIDs = new Array();
for (let i = 0; i < sections.length; i++) {
  sectionIDs.push(sections[i].id);
}

// initialize global j to redefine later
var j;

// collect arrows
let arrows = document.getElementById("arrows").getElementsByTagName("a");

// declare firstSection and lastSection
let firstSection = sections[0];
let almostFirstSection = sections[1];
let sectionCount = sections.length;
let almostLastSection = sections[sectionCount - 2];
let lastSection = sections[sectionCount - 1];
// declare currentSectionIndex
var currentSection;
var currentSectionID;

// initialize arrows
//// up arrow = hidden
document.getElementById("up").style.visibility = "hidden";
currentUpArrowLink = 0;
//// down arrow = array[1]
document.getElementById("down").setAttribute("href", "#" + sectionIDs[1]);
currentDownArrowLink = sectionIDs[1];

// 'is element in viewport' function
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    return true;
  } else {
    return false;
  }
}

// get current section
function getCurrentSection() {
  for (j = 0; j < sections.length; j++) {
    let imagesOfSection = sections[j]
      .getElementsByClassName("images")[0]
      .getElementsByTagName("img");
    for (let k = 0; k < imagesOfSection.length; k++) {
      if (isInViewport(imagesOfSection[k])) {
        currentSection = sections[j];
        currentSectionID = sectionIDs[j];
        return j;
      }
    }
  }
}

// *CLICK*

function downArrow() {
  getCurrentSection();
  if (currentSection == firstSection) {
    document.getElementById("up").style.visibility = "visible";
  } else if (currentSection == almostLastSection) {
    document.getElementById("down").style.visibility = "hidden";
  }
  var linkToNextSection = j + 1;
  var linkToPreviousSection = j - 1;
  document
    .getElementById("down")
    .setAttribute("href", "#" + sectionIDs[linkToNextSection]);
  document
    .getElementById("up")
    .setAttribute("href", "#" + sectionIDs[linkToPreviousSection]);
}

function upArrow() {
  getCurrentSection();
  if (currentSection == lastSection) {
    document.getElementById("down").style.visibility = "visible";
  } else if (currentSection == almostFirstSection) {
    document.getElementById("up").style.visibility = "hidden";
  }
  var linkToNextSection = j + 1;
  var linkToPreviousSection = j - 1;
  document
    .getElementById("down")
    .setAttribute("href", "#" + sectionIDs[linkToNextSection]);
  document
    .getElementById("up")
    .setAttribute("href", "#" + sectionIDs[linkToPreviousSection]);
}

// // *SCROLL*
const main = document.getElementsByTagName("main")[0];
main.onscrollend = (event) => {
    console.log("hoi");
    getCurrentSection(); // updates currentSection to section that is in viewport
    console.log(currentSectionID)
    console.log(document.getElementById("up").getAttribute("href"))
    // if the section in the viewport corresponds with the link of up
    if (("#" + currentSectionID) == document.getElementById("up").getAttribute("href")) {
        console.log("up")
        if (currentSectionID == sectionIDs[0]) {
            document.getElementById("down").style.visibility = "visible";
          } else if (currentSectionID == sectionIDs[sections.length - 1]) {
            document.getElementById("up").style.visibility = "hidden";
          }
          var linkToNextSection = j + 1;
          var linkToPreviousSection = j - 1;
          document
            .getElementById("down")
            .setAttribute("href", "#" + sectionIDs[linkToNextSection]);
          document
            .getElementById("up")
            .setAttribute("href", "#" + sectionIDs[linkToPreviousSection]);
    }
    // if the section in the viewport corresponds with the link of down
    else if (
      ("#" + currentSectionID) == document.getElementById("down").getAttribute("href")
    ) {
        console.log("down")
        if (currentSectionID == sectionIDs[1]) {
            document.getElementById("up").style.visibility = "visible";
          }
        if (currentSectionID == sectionIDs[sections.length - 1]) {
            document.getElementById("down").style.visibility = "hidden";
          }
          var linkToNextSection = j + 1;
          var linkToPreviousSection = j - 1;
          document
            .getElementById("down")
            .setAttribute("href", "#" + sectionIDs[linkToNextSection]);
          document
            .getElementById("up")
            .setAttribute("href", "#" + sectionIDs[linkToPreviousSection]);
    } else {
      return;
    }
  };
