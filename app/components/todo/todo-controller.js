import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	//WHAT IS MY PURPOSE? puts list to page
	let template = ''
	let todos = _todoService.Todos
	todos.forEach(t => {
		template += t.makeTemplate()
	});
	document.getElementById('todos').innerHTML = template

}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()

		// Don't forget to add your subscriber
	}

	addTodo(e) {
		debugger
		e.preventDefault()
		var form = e.target
		var newTodo = {
			description: form.description.value
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}
		_todoService.addTodo(newTodo)
		form.reset()

	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
