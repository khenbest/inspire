export default class Quote {
    constructor(data) {
        this.author = data.quote.author
        this.text = data.quote.body
        this._id = data._id
    }

    makeTemplate() {
        return `
        <h2>${this.text}</h2>
        <h6>${this.author}</h6> 
        `
    }
}