// Get user input
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

// Convert input to numbers
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// Function to add numbers
function addNumbers(a, b) {
    return a + b;
}

// Display result in an alert
alert("The sum is: " + addNumbers(num1, num2));
