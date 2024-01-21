// import logo from './logo.svg';
import Headerx from './MyComponents/Header.js';
import Todos from './MyComponents/Todos.js';
import Footer from './MyComponents/Footer.js'
import AddTodo from './MyComponents/AddTodo.js'
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete",todo);
    setTodos(todos.filter((e) => {
      // === and !== compares val and datatype
      // == and != only compares val and not datatype
      return e !== todo;
    }))

    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
  };

  const onAdd = (title,desc) => {
    console.log("Todo Added");
  };

  const [todos, setTodos] = useState([
    {
      sno : 1,
      title : "Go to market",
      desc : "You need to go to the market to get the job 1 done",
    },
    {
      sno : 2,
      title : "Go to mall",
      desc : "You need to go to the market to get the job 2 done",
    },
    {
      sno : 3,
      title : "Go to airport",
      desc : "You need to go to the market to get the job 3 done",
    },
    {
      sno : 4,
      title : "Go to mallx",
      desc : "You need to go to the market to get the job 4 done",
    },
  ]);

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

  // let myVar = 135;
  return (
    <>
      <Headerx title = "To Do List" searchBar = {false}/>
      <AddTodo onAdd = {onAdd}/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
