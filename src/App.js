import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; //Enable Routing
import './App.css';
import Todo from './components/Todo';
import About from './components/Pages/About';
import Header from './components/Header';
import AddTodo from './components/AddTodo'
import { v4 as uuidv4 } from 'uuid'; //To generate random ID

class App extends Component {
  state = {
      todo : [
        {
          id: '',
          title: '',
          completed: ''
        }
      ]
  }
  isMarked = (id) =>{ //Mark with Checkbox
   const myid = [...this.state.todo];
    this.setState({todo : myid.map(tdo => {
      if(tdo.id === id){
        tdo.completed = !tdo.completed;
      }
      return tdo;
    })})
  }
 
  isClicked = (id) =>{ //Click on this for deletion
    const myid = [...this.state.todo];
    this.setState({todo: myid.filter(tdo => tdo.id !== id)})
  }
  
  addTodo = (title) =>{ //Adding New Todo
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({todo: [...this.state.todo, newTodo]})
  }
  render(){
    return (
  <BrowserRouter>
    <div className="App">
      <div className="Container">
       <Header />
       <Route path = '/' exact render = {props => (
         <React.Fragment>
         <AddTodo addTodo = {this.addTodo} />
         <Todo todos = {this.state.todo} isMarked = {this.isMarked} isClicked = {this.isClicked}/>   
         </React.Fragment>
       )} />
       <Route path='/about' component={About}></Route>      
        </div>
    </div>
  </BrowserRouter> 
    );
  }
}

export default App;
