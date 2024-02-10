import React from 'react'
import TodoItem from './TodoItem.js'
import PropTypes from 'prop-types'

const Todos = (props) => {
  return (
    <div style={{minHeight: '100vh'}}>
      <br></br>
      <h3 className='text-center'>List of Todos</h3>
      <h5 className='text-center'>(No of Todos completed till now : {props.completed})</h5>
      <br></br>
      {/* Whenever you render things using map, always pass a unique key with it */}
      
      {props.todos.length === 0 ? <div style={{textAlign : 'center', marginTop : '2%', fontSize : '16px'}}>No Todos to display</div> : 
      props.todos.map((todo) => {
        return (<div key = {todo.sno} style={{marginLeft : props.mobile === false ? '20%' : '5%', marginRight : props.mobile == false ? '20%' : '5%', marginTop : '0.5%'}}>
          {/* <h4>Item {todo.sno}</h4> */}
          <TodoItem todo = {todo} onDelete = {props.onDelete}/>
          {/* <hr/> */}
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
