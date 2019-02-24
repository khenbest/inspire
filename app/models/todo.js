export default class Todo {
    constructor(data) {
        this.completed = data.completed
        this._id = data._id
        this.user = data.user
        this.description = data.description
    }
    makeTemplate() {
        if (this.completed == true) {
            return `<p><del>${this.description}</del></p>
        <button onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">To-Done!</button>
        <button onclick="app.controllers.todoController.removeTodo('${this._id}')>Delete</button>`
        }
        else {
            return `<p>${this.description}</p>
        <button onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">To-Done!</button>
        <button onclick="app.controllers.todoController.removeTodo('${this._id}')>Delete</button>`
        }


    }
}