import fs from 'fs';
import { fetchWeather } from './services/weatherService.js';
import { logInfo } from './utils/logger.js';

async function main(){
    console.log("Reading user configuration...");
    const configData = await fs.promises.readFile('./config.json','utf-8')
    const config = JSON.parse(configData);
    logInfo(`Fetching weather data for ${config.preferredCities.join(", ")}...`);
    
    setTimeout(() => logInfo("setImmediate callback executed"));
    setTimeout(() => logInfo("setTimeout callback executed after 0ms"), 0);

    const weatherInfo = await fetchWeather(config.preferredCities, config.unit);

    
    weatherInfo.forEach(info => logInfo(info));

    
setInterval(async () => {
      const updatedWeather = await fetchWeather(config.preferredCities, config.unit);
      updatedWeather.forEach(info => logInfo(info));
    }, 10 * 60 * 1000); // 10 minutes

    logInfo("Scheduled weather refresh in 10 minutes");

}
main();
