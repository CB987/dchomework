//Constatns
const API_URL = 'https://dc-coffeerun.herokuapp.com/api/coffeeOrders';


// DOM selection
const orderForm = document.querySelector('[data-form]');
const notificationArea = document.querySelector('[data-message]');
const resetButton = document.querySelector('[data-reset-button]');
const orderListingButton = document.querySelector('[data-load-orders]');
const orderListingArea = document.querySelector('[data-order-area]');


// Helper functions
// send form contents and confirm
function handleSubmit(event) {
	event.preventDefault();
	console.log('coffee is the point');

	console.log(event.target);
	//time for Ajax!!!
	//call fetch()
	//pass it the URL
	//and an object with a method and a body
	// const url = event.target.action;
	const method = event.target.method;
	const elements = event.target.elements;
	const data = {
		strength: elements.strength.value,
		flavor: elements.flavor.value,
		size: elements.size.value,
		coffee: elements.coffee.value,
		emailAddress: elements.emailAddress.value
	};
	fetch(API_URL, {
		method: method,
		headers: {
			'Content-Type': 'application/json; charset=utf-8'
			// "Content-Type": "application/x-www-form-urlencoded",
		},
		body: JSON.stringify(data)
	})
		.then((r) => r.json())
		.then((orderInfo) => {
			//instant arrow function!*****
			//check order info for errors
			// && is a falsey hunter
			if (orderInfo.name && orderInfo.name === 'Validation Error') {
				successMessage('Nope.');
			} else {
				successMessage('Your coffee is brewing! Life has meaning.');
			}
		}); //wrap in an anonymous function
}
// confirm if reset form is clicked, and reset
function confirmReset(e) {
	let doesWantToReset = confirm('fo sho?');
	if (!doesWantToReset) {
		e.preventDefault();
	}
}
// presenting a message for success or error
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
//working with one coffee order
function convertOrderToElement(orderInfo) {
	// debugger;
	const orderElement = document.createElement('p');
	const orderText = `
	${orderInfo.size} ${orderInfo.flavor} ${orderInfo.coffee} for ${orderInfo.emailAddress}
	(${orderInfo.strength})`;
	orderElement.innerHTML = orderText; //DANGEROUS inner HTML alert!!!
	// would be a better practice to put each element in a separate tag
	return orderElement;
}
//working with an array of coffee orders
function convertArrayofOrdersToElements(giantOrderObject) {
	let orderArray = Object.values(giantOrderObject);
	let elementsArray = orderArray.map(convertOrderToElement);
	return elementsArray;
}
//putting the orders on the screen
function getAndShowOrders(event) {
	console.log(event);
	const e = document.createElement('li')
	fetch(API_URL)
		.then(response => response.json())
		// .then(console.log)
		.then(convertArrayofOrdersToElements)
		.then(elementsArray => {
			// debugger;
			elementsArray.forEach(e => orderListingArea.appendChild(e))
		});
}


// Main event listeners
console.log('more coffee');
orderForm.addEventListener('submit', handleSubmit);
resetButton.addEventListener('click', confirmReset);
orderListingButton.addEventListener('click', getAndShowOrders);
