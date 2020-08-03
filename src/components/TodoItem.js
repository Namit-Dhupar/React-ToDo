import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () =>{
    return{
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todoitem.completed ? 'line-through' : 'none'
    }
  }

  render() {
       const {id, title} = this.props.todoitem;
        return (
            <div style = {this.getStyle()}>
               <p>
                   <input type='checkbox' onChange={this.props.isMarked.bind(this, id)}/> {' '}
                   {title}
                   <button onClick={this.props.isClicked.bind(this, id)} style={btnStyle}>X</button></p> 
            </div>
        )
    }
}

const btnStyle = {
     background: '#ff0000',
     color: '#fff',
     border: 'none',
     padding: '5px 9px',
     borderRadius: '50%',
     cursor: 'pointer',
     float: 'right' 
}

export default TodoItem
