// import logo from './logo.svg';
import Headerx from './MyComponents/Header.js';
import Todos from './MyComponents/Todos.js';
import Footer from './MyComponents/Footer.js'
import './App.css';

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete",todo);
  }

  let todos = [
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
    }
  ]

  // let myVar = 135;
  return (
    <>
      <Headerx title = "To Do List" searchBar = {false}/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
