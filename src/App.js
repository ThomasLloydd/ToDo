
import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';





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
     <h1>Tom's Todo List</h1>
     
     <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />
     <TodoList setTodos={setTodos}todos={todos}filteredTodos={filteredTodos}/>
    </div>
  );
}


export default App;
