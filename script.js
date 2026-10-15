// Get HTML elements
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convertBtn");
const errorMessage = document.getElementById("error");

const celsiusResult = document.getElementById("celsius");
const fahrenheitResult = document.getElementById("fahrenheit");
const kelvinResult = document.getElementById("kelvin");


// Convert temperature
function convertTemperature() {

    // Get input value
    const inputValue = temperatureInput.value.trim();

    // Clear previous error
    errorMessage.textContent = "";

    // Validate empty input
    if (inputValue === "") {
        errorMessage.textContent = "Please enter a temperature.";
        clearResults();
        return;
    }

    // Convert input to number
    const temperature = Number(inputValue);

    // Validate numeric input
    if (isNaN(temperature)) {
        errorMessage.textContent = "Please enter a valid numeric temperature.";
        clearResults();
        return;
    }

    // Get selected unit
    const selectedUnit = unitSelect.value;

    let celsius;

    // Convert input to Celsius first
    if (selectedUnit === "celsius") {

        celsius = temperature;

    } else if (selectedUnit === "fahrenheit") {

        celsius = (temperature - 32) * 5 / 9;

    } else if (selectedUnit === "kelvin") {

        celsius = temperature - 273.15;
    }


    // Check absolute zero
    if (celsius < -273.15) {
        errorMessage.textContent =
            "Temperature cannot be below absolute zero (-273.15°C).";

        clearResults();
        return;
    }


    // Convert Celsius to other units
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;


    // Display results
    celsiusResult.textContent = `${celsius.toFixed(2)} °C`;
    fahrenheitResult.textContent = `${fahrenheit.toFixed(2)} °F`;
    kelvinResult.textContent = `${kelvin.toFixed(2)} K`;
}


// Clear results
function clearResults() {

    celsiusResult.textContent = "-- °C";
    fahrenheitResult.textContent = "-- °F";
    kelvinResult.textContent = "-- K";
}


// Convert when button is clicked
convertButton.addEventListener("click", convertTemperature);


// Allow Enter key to convert
temperatureInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        convertTemperature();
    }

});


// Clear error when user starts typing
temperatureInput.addEventListener("input", function() {

    errorMessage.textContent = "";

});