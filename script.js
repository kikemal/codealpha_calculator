// Get the display input
let result = document.getElementById("result");

// Function to add numbers and operators to display
function Num(value) {
  result.value += value;
}

// Function to clear the display
function clr() {
  result.value = "";
}

// Function to calculate the result
function equal() {
  try {
    // Evaluate the expression
    result.value = eval(result.value);
  } catch (error) {
    // Handle invalid expressions
    result.value = "Error";
  }
}
