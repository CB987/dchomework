const IMAGES = [
    //'images/IMG_0150.jpg',
    {url:'images/IMG_0049.jpg', alt: 'another pic of the outside'},
    {url:'images/IMG_0166.jpg', alt: 'another pic of the outside'},
    {url:'images/IMG_0047.jpg', alt: 'another pic of the outside'},
]

// let myHeader = document.createElement('h1');
// let myDiv = document.createElement('div');
// let myImage = document.createElement('img');
const outputElement = document.querySelector('[data-output]');
// function that generates an img element
function createImage(imageInfo) {
    const myImage = document.createElement('img');
   
    myImage.setAttribute('src', imageInfo.url);
    myImage.setAttribute('alt', imageInfo.alt);
    myImage.setAttribute('title', imageInfo.alt);
    // the element that got clicked is accessibly as `even.ttarget`
    // and i can read the `src` attribute
    myImage.addEventListener('click', function (event) {
        console.log(event.target.src);
        outputElement.setAttribute('src', event.target.src);
    })
    return myImage;
}

// function that generates the thumbnail div
function createThumbnail(imageInfo) {
    const myDiv = document.createElement('div');
    myDiv.classList.add('thumbnail-item');
    const image = createImage(imageInfo);
    myDiv.appendChild(image);
    return myDiv;
}

// create thumbnail-container div
function createThumbnailContainer() {
    const myDiv = document.createElement('div');
    myDiv.classList.add('thumbnail-container');
    myDiv.setAttribute('data-container', '');
    return myDiv;
}
// let x = createThumbnailContainer();
// document.body.appendChild(x);
// const thumbnailContainer = document.querySelector('[data-container]');

const thumbnailContainer = createThumbnailContainer();
document.body.appendChild(thumbnailContainer);
// don't these need to be inside the thumb-nail container div?

imageInfo.forEach(function(singleImageInfo) {
    // debugger
    let testThumb = createThumbnail(singleImageInfo);
    document.body.appendChild(testThumb);
});

// thumbnailContainer.appendChild(createThumbnail(IMAGES[]));
// thumbnailContainer.appendChild(createThumbnail(IMAGES[1]));
// thumbnailContainer.appendChild(createThumbnail(IMAGES[2]));

// //create a div for the large image
// function createLargeImage(clickMe) {
//     const myDiv = document.createElement('div');
//     myDiv.classList.add('picture-frame');
//     // const image = createImage(imageURL)
//     myDiv.appendChild(createImage(clickMe));
//     return myDiv;
// }

// template for asking the browser for soemthing with a data attribute
// const outputElement = document.querySelector('[data-output]');

// const largeImage = createLargeImage(event);
// document.body.appendChild(largeImage);

