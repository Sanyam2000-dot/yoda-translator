var output = document.querySelector("#btn-output");
var input = document.querySelector("#text-input")
var outputdiv = document.querySelector("#output-area")

var serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getURL(input) {
    return serverURL + "?text=" + input
}

function clickHandler() {
    var inputText = input.value;

    fetch(getURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputdiv.innerText = translatedText;
        })
}
output.addEventListener("click", clickHandler)