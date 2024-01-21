import React from 'react'
import TodoItem from './TodoItem.js'
import PropTypes from 'prop-types'

const Todos = (props) => {
  return (
    <div style={{minHeight: '100vh'}}>
      <h3 className='text-center'>To do Works</h3>
      {/* Whenever you render things using map, always pass a unique key with it */}
      {props.todos.length === 0 ? "No Todos to display" : 
      props.todos.map((todo) => {
        return (<div key = {todo.sno} style={{marginLeft : '1%'}}>
          {/* <h4>Item {todo.sno}</h4> */}
          <TodoItem todo = {todo} onDelete = {props.onDelete}/>
          <hr/>
        </div>)
      })
      }
      {/* 
      <TodoItem todo = {props.todos[0]}/>
      <TodoItem todo = {props.todos[1]}/>
      <TodoItem todo = {props.todos[2]}/>
       */}

    </div>
  )
}

export default Todos

// In order to specify the default values
Todos.defaultProps = {
  todos : [],
}

// In Order to specify the types for the variables in props
// Helps in debugging by seeing the console using inspect element
Todos.propTypes = {
  todos : PropTypes.array,
}
