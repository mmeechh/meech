const apiKey = 'a8424b8012f1d90e542e4ae9628913b5';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Maryland,US&appid=${apiKey}&units=imperial`;

// Fetch weather data
async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        
        const temperature = data.main.temp;
        document.getElementById('weather').textContent = `Maryland: ${temperature}°F`;
    } catch (error) {
        document.getElementById('weather').textContent = `Error: ${error.message}`;
    }
}

fetchWeather();
