var hidden = new Boolean(false);

function hide() {
    if (hidden == false) {
        document.getElementsByTagName("aside")[0].style.visibility = "hidden";
        hidden = true
    }
    else {
        document.getElementsByTagName("aside")[0].style.visibility = "visible";
        hidden = false
    }

}