import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class EventStore extends EventEmitter {
	constructor() {
		super();
		this.data = [
		{
			date: 'Sat Dec 31 2016 15:22:31 GMT-0800 (PST)',
			events:[
				{
					startTime: 1483226551619,
					endTime: 1483230551619,
					text: "this is something to do",
					category: "play",
				}
			]	
		},
		{
			date: 'Sun Jan 1 2016 15:22:31 GMT-0800 (PST)',
			events:[
				{
					startTime: 1485226551619,
					endTime: 1485228551619,
					text: "this is another somethiing to do",
					category: "love",
				}
			]	
		}
		];
	}
	updateTodos(data){
		this.data = data;
		this.emit("change");
	}
	createTodo(text) {
		this.emit("change");
	}
	pushTodo(todo){
		this.createTodo(todo);
		this.emit("change");
	}

	getAll() {
		return(this.data);
	}
	handleActions(action) {
		switch(action.type){
			case "UPDATE_TODOS":{
				this.updateTodos(action.data);
			}
			case "CREATE_TODO": {
				this.createTodo(action.text);
			}
			case "PUSH_TODO" : {
				this.pushTodo(action.text);
			}
		}
	}
}

const eventStore = new EventStore;
dispatcher.register(eventStore.handleActions.bind(eventStore));

export default eventStore;
