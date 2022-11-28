// import"./ui/styles/test.css"
import Tooltip from "./ui/tooltip";
import Dropdown from "./ui/dropdown";
import Tab from "./ui/tab";
import Snackbar from "./ui/snackbar";

//create tooltip
const tooltip =new Tooltip ( document.querySelector(".tooltip"))
tooltip.init()

//create dropdown
const dropdown= document.querySelectorAll(".dropdown")
dropdown.forEach(drop =>{
    const instance = new Dropdown(drop)
    instance.init()
})

// create tab
const tab = new Tab( document.querySelector(".tabs"))
tab.init()

//create snackbar

const snackbar = new Snackbar()
snackbar.init()

const button = document.querySelector("button")
button.addEventListener("click", () =>{
    snackbar.show("You Clicked Me")
})