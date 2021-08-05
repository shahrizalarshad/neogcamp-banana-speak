var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



function clickHandler() {
    outputDiv.innerHTML = "Banana Language " + txtInput.value; 
};

btnTranslate.addEventListener("click", clickHandler)
 