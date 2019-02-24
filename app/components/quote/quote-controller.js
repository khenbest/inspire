import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
    let template = _qs.Quotes.makeTemplate()
    document.getElementById('quote').innerHTML = template

}

export default class QuoteController {
    constructor() {
        _qs.addSubscriber('quotes', drawQuote)
        _qs.getQuotes()
    }
}
