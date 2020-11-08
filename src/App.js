
import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import ToDoCount from './components/ToDoCount';





function App() {
  //State
 
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

 
  useEffect(()=> {
    getLocalTodos();
  }, []);

  useEffect(()=> {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  

  //Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
      default:
        setFilteredTodos(todos);
      } 
  }

  //Save
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    };

    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem('todos'));
        setTodos(todoLocal);
      };
    };
  
   

  return (
    <div className="App">
      <div className="main-container">
      <div className="content-container">
        <div class="title-container">
     <h1>To do</h1>
     <ToDoCount todos={todos} filteredTodos={filteredTodos} status={status}/>
     <h2></h2>
     </div>
     
     <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
     <TodoList setTodos={setTodos}todos={todos}filteredTodos={filteredTodos} status={status}/>
     
     </div>
     </div>
    </div>
  );
}


export default App;
