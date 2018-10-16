const imageInfo = [
    //'images/IMG_0150.jpg',
    {url:'images/IMG_0049.jpg', alt: 'another pic of the outside'},
    {url:'images/IMG_0166.jpg', alt: 'another pic of the outside'},
    {url:'images/IMG_0047.jpg', alt: 'another pic of the outside'},
]

//any querySelectors needed that haven't yet been created
// const modalElement = document.querySelector('[data-modal]');
// const outputElement = document.querySelector('[data-output]');


// header
function createHeader () {
    const myHeader = document.createElement('h1');
    myHeader.textContent = 'InstaClone';
    return myHeader;
}
document.body.appendChild(createHeader());

//second section: modal
// outermost element, modal modal-hidden class
function createModalElement() {
    const myDiv = document.createElement('div');
    myDiv.classList.add('modal');
    myDiv.classList.add('modal-hidden');
    myDiv.setAttribute('data-modal', '');
    return myDiv;
} //and deploy
const modalElement = createModalElement();
document.body.appendChild(modalElement);


// modal, second-innermost element: picture-frame div with image
function createPictureFrame() {
    const myDiv = document.createElement('div');
    myDiv.classList.add('picture-frame');
    // const image = createImage(imageInfo);
    // myDiv.appendChild(image);
    return myDiv;
}
const pictureFrame = createPictureFrame(imageInfo);
modalElement.appendChild(pictureFrame);

// modal: innermost element: image
function createOutputElement() {
    const myImage = document.createElement('img');
    myImage.setAttribute('data-output', '');
    // myImage.setAttribute('alt', imageInfo.alt);
    // myImage.setAttribute('title', imageInfo.alt);
    return myImage;
}
const outputElement = createOutputElement();
pictureFrame.appendChild(outputElement);

// thumbnail section: the thumbnails
// 3rd wrap:  thumbnail-container for all thumbnails
function createThumbnailContainer() {
    const myDiv = document.createElement('div');
    myDiv.classList.add('thumbnail-container');
    myDiv.setAttribute('data-container', '');
    return myDiv;
} //and deploy
const thumbnailContainer = createThumbnailContainer();
document.body.appendChild(thumbnailContainer);

//thumbnail section, second-innermost wrap: thumbnail-item div with image
function createThumbnail(imageInfo) {
    const myDiv = document.createElement('div');
    myDiv.classList.add('thumbnail-item');
    const image = createImage(imageInfo);
    myDiv.appendChild(image);
    return myDiv;
}

// thumbnail section, innermost element: img
function createImage(imageInfo) {
    const myImage = document.createElement('img');
    myImage.setAttribute('src', imageInfo.url);
    myImage.setAttribute('alt', imageInfo.alt);
    myImage.setAttribute('title', imageInfo.alt);
    myImage.addEventListener('click', function (event) {
        outputElement.setAttribute('src', event.target.src);
        outputElement.setAttribute('alt', event.target.alt);
        outputElement.setAttribute('title', event.target.alt);
        modalElement.classList.remove('modal-hidden');
    })
    return myImage;
}

// function main() {
    imageInfo.forEach(function(singleImageInfo) {
    let testThumb = createThumbnail(singleImageInfo);
    thumbnailContainer.appendChild(testThumb);
    });
    
    
    // modal functionality
    // remove modal if hit escape key
    window.addEventListener('keydown', function (event) {
        if (event.keyCode === 27) {
            modalElement.classList.add('modal-hidden');
        } 
    })
    //remove modal if click while open
    modalElement.addEventListener('click', function     () {
        modalElement.classList.add('modal-hidden');
    })
    // use R/L arrows to scroll through pics in modal mode from pic array of objects
    function getCurrentIndex(currentURL) {
        // let index = imageInfo.map(function (i) {
        //     return i.url;
        // }).indexOf(currentURL)
        let index = imageInfo.map(i => i,url).indexOf(currentURL);
        return index;
    }
    function getNextImage(currentURL){
        let index = getCurrentIndex(currentURL);
        index++;
        if (index === imageInfo.length) {
            index = 0;
        }
        return imageInfo[index].url;
    }
    function getPrevImage(currentURL) {
        let index = getCurrentIndex(currentURL);
        index--;
        if (index < 0) {
            index === imageInfo.length - 1;
        }
        return imageInfo[index].url;
    }
    window.addEventListener('keydown', function (event) {
        if (event.keyCode === 37) {
            console.log('previous');
            let current = outputElement.getAttribute('src');
            let previous = getPrevImage(current);
            outputElement.setAttribute('src', previous);
        } else if (event.keyCode === 39) {
            console.log('next');
            let current = outputElement.getAttribute('src');
            let next = getNextImage(current);
            outputElement.setAttribute('src', next);
        }})
// }

// main();