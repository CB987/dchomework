const imageInfo = [
    //'images/IMG_0150.jpg',
    {url:'images/IMG_0049.jpg', alt: 'another pic of the outside'},
    {url:'images/IMG_0166.jpg', alt: 'another pic of the outside'},
    {url:'images/IMG_0047.jpg', alt: 'another pic of the outside'},
]

function createHeader () {
    const myHeader = document.createElement('h1)');
    myHeader.textContent = 'InstaClone';
    return myHeader;
}
const header = createHeader();
document.body.appendChild(header);