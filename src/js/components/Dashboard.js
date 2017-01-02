import React from "react";
import EventStore from "../stores/EventStore.js";
import * as EventActions from "../actions/EventActions.js";
import Header from "./Header.js";
import Calendar from "./Calendar.js"

export default class Dashboard extends React.Component {

	constructor(){
	  super();
	  this.state = {
	    data: EventStore.getAll(),
	  };
	}
	componentWillMount() {
		EventActions.returnTodos();
		EventStore.on("change", () => {
			this.setState({
				data: EventStore.getAll(),
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
		EventActions.updateTodos(action);
	}
	createTodo(e){
		if(e.key === 'Enter'){
			EventActions.pushTodo(e.target.value);
			EventActions.returnTodos();
			this.state.todo = "";
			e.target.value = "";
		}
	}
	revealInput(){
		EventActions.generateInput();
	}
	render(){
		const {data} = this.state;
		return(
			<div>
				<Header />
				<Calendar items={data} />
			</div>
		);
	}
}