// DOM selection
const orderForm = document.querySelector('[data-form]');


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
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
        }
        body: JSON.stringify(data)
    })
}


// Main event listeners
console.log('more coffee');
orderForm.addEventListener('submit', handleSubmit);
