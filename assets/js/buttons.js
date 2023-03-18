// Getted elements
let incrementButton = document.getElementById("button-increment");
let decrementButton = document.getElementById("button-decrement");
let resetButton = document.getElementById("button-reset");
let displayNumber = document.getElementById("display-number");

// Setting counter's initial value
let counter = 0;

// addEventListener
incrementButton.addEventListener("click", incrementCounter);
decrementButton.addEventListener("click", decrementCounter);
resetButton.addEventListener("click", resetCounter);

/* --- function section --- */

// function - increment value
function incrementCounter() {
  counter += 1;
  displayNumber.innerHTML = counter;
}

// function - decrement value
function decrementCounter() {
  counter -= 1;
  displayNumber.innerHTML = counter;
}

// function - reset value
function resetCounter() {
  counter = 0;
  displayNumber.innerHTML = counter;
}
