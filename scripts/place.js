document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

// weather
const temperature = 86; // °F
const windSpeed = 5;    // mph

function calculateWindChill(temp, wind) {
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
}

const windChillEl = document.getElementById("windchill");

if (temperature <= 50 && windSpeed > 3) {
    windChillEl.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)}°F`;
} else {
    windChillEl.textContent = "N/A";
}
