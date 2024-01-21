import React from 'react'
import PropTypes from 'prop-types'

// Here we have de structed instead of using props
// So we need to use todo instead of props.todo
const TodoItem = ({todo,onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button type="button" className="btn btn-sm btn-danger" onClick = {() => {onDelete(todo)}}>Delete</button>
      <br/>
      <br/>
    </div>
  )
}

export default TodoItem

TodoItem.deafaultProps = {
  todo : {},
}

TodoItem.prototype = {
  todo : PropTypes.object,
}