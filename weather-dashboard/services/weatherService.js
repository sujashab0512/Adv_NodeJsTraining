
export function fetchWeather(cities, unit) {
  return new Promise((resolve) => {
    
    const fakeWeatherData = {
      "New York": { temp: 25, condition: "Sunny" },
      "London": { temp: 18, condition: "Cloudy" },
      "Tokyo": { temp: 30, condition: "Rain" }
    };

    
    const result = cities.map(city => {
      const data = fakeWeatherData[city];
      return `Weather in ${city}: ${data.temp}°${unit}, ${data.condition}`;
    });

    resolve(result);
  });
}
