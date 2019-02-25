export default class Todo {
    constructor(data) {
        this.completed = data.completed
        this._id = data._id
        this.user = data.user
        this.description = data.description
    }
    makeTemplate() {
        if (this.completed == true) {
            return `<div class="col-12">
            <h2><del>${this.description}</del></h2>
        <button onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">To-Done!</button>
        <button onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete</button>
        </div>`
        }
        else {
            return `<div class="col-12">
            <h2>${this.description}</h2>
        <button onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">To-Done!</button>
        <button onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete</button>
        </div>`
        }


    }
}