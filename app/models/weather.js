export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.temp = (data.main.temp * (9 / 5) - 459.67).toFixed(0)
  }
  makeTemplate() {
    return `<div class="col-4">
    <h1>${this.temp}</h1>
    <h3>${this.city}</h3>
    </div>`
  }
}