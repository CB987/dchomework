// fetch some information from the API
// convert it to JSON
// draw the data to the screen



const chuckTrigger = document.querySelector('[data-trigger-chuck]');
const chuckOutput = document.querySelector('[data-output-chuck]');

const punTrigger = document.querySelector('[data-trigger-pun]');
const punOutput = document.querySelector('[data-output-pun]');

const catTrigger = document.querySelector('[data-trigger-cat]');
const catOutput = document.querySelector('[data-output-cat');

function chuck ()  {
    fetch("https://api.icndb.com/jokes/random")
    .then( r => r.json())
    .then( j => j.value.joke)
    .then(writeChuck)
}

const joke = document.createElement('li');
function writeChuck(content) {
    joke.textContent = content;
    chuckOutput.appendChild(joke);
}

function pun() {
    fetch("http://my-little-cors-proxy.herokuapp.com/http://getpuns.herokuapp.com/api/random")
    // fetch('https://talaikis.com/api/quotes/random/')
    .then( r => r.json())
    .then( c => c.Pun)
    .then(writePun)
}

const punny = document.createElement('li');
function writePun(content) {
    punny.textContent = content;
    punOutput.appendChild(punny);
}

function catPic() {
    fetch('https://api.thecatapi.com/v1/images/search', {
        method: "GET",
        headers: {
            "x-api-key":"59721170-13cc-4be4-9614-050360075466"
        }
    })
    .then( r => r.json())
    .then( p => p[0].url)
    .then(showCat)
}

const cat = document.createElement('img');
function showCat(imageURL) {
    cat.setAttribute('src', imageURL)
    catOutput.appendChild(cat);
}

function button() {
    chuckTrigger.addEventListener('click', chuck);
    punTrigger.addEventListener('click', pun);
    catTrigger.addEventListener('click', catPic)
}

button();