// let mockServerURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';

let serverURL = 'https://api.funtranslations.com/translate/minion.json';
let inputText = document.querySelector('#txt-input');
let btnTranslate = document.querySelector('#btn-translate');
let outputText = document.querySelector('#txt-output');


function constructURL(text) {
    return  serverURL + '?' + 'text=' + text;
};

function errorHandler(error) {
    alert('Error occured' + error);
}

function generateOutput(fetchedText) {
    outputText.innerHTML = fetchedText;
}
function clickEventHandler() {
    let text = inputText.value;
   // calling server for processing
    fetch(constructURL(text))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText; // output
           })
        .catch(errorHandler)
    inputText.value = '';
}
btnTranslate.addEventListener('click', clickEventHandler);

