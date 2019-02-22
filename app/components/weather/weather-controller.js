import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {

	let template = _weatherService.Weather.makeTemplate()

	document.getElementById('weather').innerHTML = template

}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()

	}

}
