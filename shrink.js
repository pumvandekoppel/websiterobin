var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

// pick the scaleX that is set via scale.js
const scaleX = newScaleX

// pick the p tag
const shrinkThisBigTitle = document.getElementsByTagName("p")[0]


// transition from scaleX (from scale.js) to 0 when scrolling from top to bottom
window.addEventListener("scroll", function(){
    // amount of pixels scrolled
    const pixels = window.scrollY

    // difference in scaleX to travel when scrolling | destination = 1, start = scaleX
    const difference = scaleX - 1
    // shrink Scale x
    var shrinkScaleX = scaleX - (difference*(pixels+(pixels/(height-vh(100)))*vh(100)))/height
    shrinkThisBigTitle.style.transform = "scaleX(" + shrinkScaleX + ")"

    // reduce font-weight
    const fontWeight = 700 - ((pixels/(height-vh(100)))*vh(100) * 0.3)
    console.log(fontWeight)
    shrinkThisBigTitle.style.fontVariationSettings = "'wght' "  + fontWeight
})