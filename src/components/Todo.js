import React, {Component} from 'react';
import TodoItem from './TodoItem';

class Todo extends Component {
    render(){
        return this.props.todos.map(todo => (
        <TodoItem key = {todo.id} todoitem={todo} isMarked = {this.props.isMarked} isClicked = {this.props.isClicked}/> 
    ));
   }
}

export default Todo;