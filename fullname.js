const mediaQueryForName = window.matchMedia( '(min-width: 412px)' )
var fullname = false
const middleName = document.getElementById("middle-name")

function toggleFullName() {
    if (fullname == false && mediaQueryForName) {
        middleName.style.display = "initial"
        fullname = true
    }
    else {
        middleName.style.display = "none"
        fullname = false
    }
}