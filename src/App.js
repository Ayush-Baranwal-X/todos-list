// import logo from './logo.svg';
import Headerx from './MyComponents/Header.js';
import Todos from './MyComponents/Todos.js';
import Footer from './MyComponents/Footer.js'
import AddTodo from './MyComponents/AddTodo.js'
import About from './MyComponents/About.js'
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
// React router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null)
  {
    initTodo = [];
  }
  else
  {
    initTodo = JSON.parse(localStorage.getItem("todos"));

  }

  const onDelete = (todo) => {
    // console.log("I am onDelete",todo);
    setTodos(todos.filter((e) => {
      // === and !== compares val and datatype
      // == and != only compares val and not datatype
      return e !== todo;
    }))

    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    
    // UseEffect is handling the following storage
    // localStorage.setItem("todos",JSON.stringify(todos));
  };

  const [todos, setTodos] = useState(initTodo);

  
  // const [todos, setTodos] = useState([
  //   {
  //     sno : 1,
  //     title : "Go to market",
  //     desc : "You need to go to the market to get the job 1 done",
  //   },
  //   {
  //     sno : 2,
  //     title : "Go to mall",
  //     desc : "You need to go to the market to get the job 2 done",
  //   },
  //   {
  //     sno : 3,
  //     title : "Go to airport",
  //     desc : "You need to go to the market to get the job 3 done",
  //   },
  //   {
  //     sno : 4,
  //     title : "Go to mallx",
  //     desc : "You need to go to the market to get the job 4 done",
  //   },
  // ]);

  // This is replced by the above format since we have to use onDelete
  // let todos = [
  //   {
  //     sno : 1,
  //     title : "Go to market",
  //     desc : "You need to go to the market to get the job 1 done",
  //   },
  //   {
  //     sno : 2,
  //     title : "Go to mall",
  //     desc : "You need to go to the market to get the job 2 done",
  //   },
  //   {
  //     sno : 3,
  //     title : "Go to airport",
  //     desc : "You need to go to the market to get the job 3 done",
  //   }
  // ]

  const onAdd = (title,desc) => {
    // console.log(title + " " + desc);
    let sno = 1;
    if(todos.length > 0)
    {
      sno = todos[todos.length-1].sno+1;
    }
    const mytodo = {sno : sno, title : title, desc : desc};
    // console.log(mytodo);
    setTodos([...todos,mytodo]);

    // UseEffect is handling the following storage
    // localStorage.setItem("todos",JSON.stringify(todos));
  };

  // This used to ensure that things are stored only after updation of todos
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  // let myVar = 135;
  return (
    <>
    <Router>
      <Headerx title = "To Do List" searchBar = {false}/>

      <Switch>
          <Route exact path="/" render = {()=>{
            return (
              <>
                <AddTodo onAdd = {onAdd}/>
                <Todos todos = {todos} onDelete = {onDelete}/>
              </>
            );
          }}>
          </Route>
          <Route exact path="/about" render = {()=>{
            return (
              <>
                <About />
              </>
            );
          }}>
          </Route>
      </Switch>

      
      <Footer/>
    </Router>
    </>
  );
}

export default App;
