var hidden = new Boolean(false);

function reclame() {
    if (hidden == true) {
        document.getElementById("plug").style.display = "none";
        document.getElementsByClassName("self-promotion_hidden")[0].style.display = "inline-block";
        hidden = false
    }
    else {
        document.getElementById("plug").style.display = "inline-block";
        document.getElementsByClassName("self-promotion_hidden")[0].style.display= "none";
        hidden = true
    }
}