// This script is the art behind the functionality of the Petrol Cost Calculator
// It will calculate the total cost based on user input

// Function to calculate the total cost of petrol
function calculateTotal() {
    // Retrieve values from input fields
    let price = Number(document.getElementById("price").value);
    let liters = Number(document.getElementById("liters").value); // Fixed missing parenthesis

    // Calculate total cost
    let totalCost = price * liters;

    // Display the total cost in the <p> tag
    document.getElementById("total").textContent = "Total Cost: $" + totalCost.toFixed(2);
}
