// DOM selection
const orderForm = document.querySelector('[data-form]');
const notificationArea = document.querySelector('[data-message]');
// console.log(modalElement); 
const pendingButton = document.querySelector('[data-trigger]');
const pendingOrders = document.querySelector('[data-output]');
// Helper functions
function handleSubmit(event) {
    event.preventDefault();
    console.log('coffee is the point');

    console.log(event.target);
    //time for Ajax!!!
    //call fetch()
    //pass it the URL
    //and an object with a method and a body
    const url = event.target.action;
    const method = event.target.method;
    const elements = event.target.elements;
    const data = {
        strength: elements.strength.value,
        flavor: elements.flavor.value,
        size: elements.size.value,
        coffee: elements.coffee.value,
        emailAddress: elements.emailAddress.value,
    }
    fetch(url, { 
        method: method,
        headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
                },
        body: JSON.stringify(data)
    }).then(r => r.json())
    .then((orderInfo) => {  //instant arrow function!*****
        //check order info for errors
        if (orderInfo.name === "Validation Error") {
            successMessage(orderInfo.message);
        } else {
            successMessage('Your coffee is brewing! Life has meaning.');
        }
     }) //wrap in an anonymous function
} 



// Main event listeners
console.log('more coffee');
orderForm.addEventListener('submit', handleSubmit);

// When the server sends the response after you submit an order, add some DOM elements to the page, letting the user know that the order was successfully submitted.
function successMessage(successText) {
    //create a div
    const notificationBox = document.createElement('div');
    //add some text
    notificationBox.textContent = successText;
    //append to the document
    // if(notificationArea.firstChild) {
    //     notificationArea.removeChild(notificationArea.firstChild);
    // }
    notificationArea.innerHTML = '';
    notificationArea.appendChild(notificationBox);
    // modalElement.classlist.remos
}

// Add another section to the page after the form. In this section, you will list out all of the coffee orders on the server. (Hint: you will need to either add a button that does a fetch, or you will fetch when the page loads. After you fetch, create DOM elements showing each order information and add these to the new section.)
pendingButton.addEventListener('click', getPendingOrders);
function getPendingOrders() {
    fetch('https://dc-coffeerun.herokuapp.com/api/coffeeOrders')
         .then(r => r.JSON)
         .then(extractOrders)
         .catch(showError)
         .then(showOrders)
}

function extractOrders(content) {

}

function showOrders(content) {

}

function showError(err) {

}
