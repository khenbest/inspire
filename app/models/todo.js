export default class Todo {
    constructor(data) {
        this.completed = data.completed
        this._id = data._id
        this.user = data.user
        this.description = data.description
    }
    makeTemplate() {
        return `<p>${this.description}</p>
        <button onclick="toggle!@#!@#">mark as done fn</button>
        <button onclick="delete(0">delete</button>`

    }
}