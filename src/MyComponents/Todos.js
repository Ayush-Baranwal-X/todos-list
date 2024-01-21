import React from 'react'
import TodoItem from './TodoItem.js'
import PropTypes from 'prop-types'

const Todos = (props) => {
  return (
    <div>
      <h3 className='text-center'>To do Works</h3>
      {props.todos.map((todo) => {
        return (<>
          <h4>Item {todo.sno}</h4>
          <TodoItem todo = {todo}/>
        </>)
      })}
      
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
