const changeModeEL = document.querySelector(".changeMode")
const body = document.querySelector("body")

const query = window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light"

var mode = localStorage.getItem("mode") ? localStorage.getItem("mode") : query

const changeMode = () => {
    if (mode == "dark") {
        body.classList.add("dark")
    } else (
        body.classList.remove("dark")
    )
}

changeMode()

changeModeEL.addEventListener("click", () => {

    if (mode == "light") {
        mode = "dark"
    } else (
        mode = "light"
    )
    localStorage.setItem("mode", mode)
    changeMode()

})