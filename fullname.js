var fullname = false
const middleName = document.getElementById("middle-name")

function toggleFullName() {
    if (fullname == false) {
        middleName.style.display = "initial"
        fullname = true
    }
    else {
        middleName.style.display = "none"
        fullname = false
    }
}