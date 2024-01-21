import React from 'react'
import PropTypes from 'prop-types'


const TodoItem = (props) => {
  return (
    <div>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button type="button" class="btn btn-sm btn-danger">Delete</button>
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