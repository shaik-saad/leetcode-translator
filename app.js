// creating references and storing them in variables
var inputText = document.querySelector("#input-text")
var btnHack = document.querySelector("#btn-hack")
var leetCode = document.querySelector("leet-output")

function clickHandler(){
    console.log("clicked")
}

btnHack.addEventListener("click", clickHandler)