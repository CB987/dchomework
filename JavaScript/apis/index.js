// fetch some information from the API
// convert it to JSON
// draw the data to the screen



const chuckTrigger = document.querySelector('[data-trigger-chuck]');
const chuckOutput = document.querySelector('[data-output-chuck]');

const punTrigger = document.querySelector('[data-trigger-pun]');
const punOutput = document.querySelector('[data-output-pun]');

const catTrigger = document.querySelector('[data-trigger-cat]');
const catOutput = document.querySelector('[data-output-cat]');

function chuck ()  {
    fetch("https://api.icndb.com/jokes/random")
    .then( r => r.json())
    .then(saveChuck)
    .then( j => j.value.joke)
    .catch(backupChuck)
    .then(writeChuck)
}

const joke = document.createElement('li');
function writeChuck(content) {
    joke.textContent = content;
    chuckOutput.appendChild(joke);
}

function saveChuck(content) {
    if (content.value.joke) {
        localStorage.setItem('chuck', JSON.stringify(content.value.joke));
    }
    return content;
}

function backupChuck(err) {
    console.log(err);
    return JSON.parse(localStorage.getItem('chuck'));
}

function pun() {
    fetch("http://my-little-cors-proxy.herokuapp.com/http://getpuns.herokuapp.com/api/random")
    .then( r => r.json())
    .then(savePun)
    .then( c => c.Pun)
    .catch(backupPun)
    .then(writePun)
}

const punny = document.createElement('li');
function writePun(content) {
    punny.textContent = content;
    punOutput.appendChild(punny);
}

function savePun(content) {
    if (content.Pun) {
        localStorage.setItem('pun', content.Pun);
    }
    return content;
}

function backupPun(err) {
    console.log(err);
    return localStorage.getItem('pun');
}

function cat() {
    fetch('https://api.thecatapi.com/v1/images/search', {
        method: "GET",
        headers: {
            "x-api-key":"59721170-13cc-4be4-9614-050360075466"
        }
    })
    .then( r => r.json())
    .then( p => p[0].url)
    // .catch(noCat)
    .then(showCat)
}

const catPic = document.createElement('img');
function showCat(imageURL) {
    catPic.setAttribute('src', imageURL)
    catOutput.appendChild(catPic);
}

function button() {
    chuckTrigger.addEventListener('click', chuck);
    punTrigger.addEventListener('click', pun);
    catTrigger.addEventListener('click', cat)
}

button();