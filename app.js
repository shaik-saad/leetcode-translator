// creating references and storing them in variables
var inputTextarea = document.querySelector("#input-text")
var btnHack = document.querySelector("#btn-hack")
var leetCode = document.querySelector("#leet-output")

// server api
var url = "https://api.funtranslations.com/translate/leetspeak.json"

function getFullURL(value){
    var fullURL = url + "?text=" + value
    return fullURL
}

function errorHandler(err){
    console.log(err)
    alert("Something went wrong! Please try again after sometime.")
}

function clickHandler(){
    //input
    var inputValue = inputTextarea.value 

    //processing
    fetch(getFullURL(inputValue))
    .then(response => response.json())
    .then(json => {
        //output
        leetCode.innerText = json.contents.translated
    })
    .catch(error => errorHandler(error))
}

btnHack.addEventListener("click", clickHandler)