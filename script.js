/* ================== PART 2: JavaScript Functions ================== */

// Global variable
let globalMessage = "Hello from global scope!";

// Function with parameters + return
function greetUser(name) {
  return `Welcome, ${name}!`;
}

// Function with return value (calculation)
function calculateSquare(num) {
  return num * num;
}

// Function showing local vs global scope
function showScopeDemo() {
  let localMessage = "I only exist inside this function.";
  console.log(localMessage);
  console.log(globalMessage); // Accessible
  alert("Check the console for scope demo results!");
}

// Display results on page load
window.onload = () => {
  document.getElementById("greeting").textContent = greetUser("Okiki");
  document.getElementById("square").textContent = `5 squared = ${calculateSquare(5)}`;
};

/* ================== PART 3: CSS + JS Combo ================== */

// Function that toggles animation class
function animateBox() {
  const box = document.querySelector('.box');
  box.classList.toggle('animate');
}
