var hidden = new Boolean(true);

function reclame() {
    if (hidden == true) {
        document.getElementById("plug").style.display = "none";
        document.getElementsByClassName("self-promotion_hidden")[0].style.display = "inline";
        hidden = false
    }
    else {
        document.getElementById("plug").style.display = "inline";
        document.getElementsByClassName("self-promotion_hidden")[0].style.display= "none";
        hidden = true
    }
}