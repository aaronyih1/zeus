import React from "react";
import TodoStore from "../stores/TodoStore.js";
import * as TodoActions from "../actions/TodoActions.js";
import Header from "./Header.js";
import Calendar from "./Calendar.js"

export default class Dashboard extends React.Component {

	constructor(){
	  super();
	  this.state = {
	    todos: TodoStore.getAll(),
	  };
	}
	componentWillMount() {
		TodoActions.returnTodos();
		TodoStore.on("change", () => {
			this.setState({
				todos: TodoStore.getAll(),
			});
		});
	}
	changeTodo(todo){
	  this.setState({todo});
	}
	handleChange(e){
		const todo = e.target.value;
		this.changeTodo(todo);
	}
	updateTodos(action){
		TodoActions.updateTodos(action);
	}
	createTodo(e){
		if(e.key === 'Enter'){
			TodoActions.pushTodo(e.target.value);
			TodoActions.returnTodos();
			this.state.todo = "";
			e.target.value = "";
		}
	}
	render(){
		const {todos} = this.state;
		return(
			<div>
				<Header />
				<Calendar />
			</div>
		);
	}
}