import React from 'react'
import PropTypes from 'prop-types'

// Here we have de structed instead of using props
// So we need to use todo instead of props.todo
const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <div class="card text-bg-light">
        <div class="card-header">
        <b>{todo.title}</b>
        </div>
        <div class="card-body">
          {/* <h5 class="card-title"></h5> */}
          <p class="card-text">{todo.desc}</p>
          <button type="button" style={{ width: "60px", marginRight: "10px" }} className="btn btn-sm btn-dark" onClick={() => { onDelete(todo, 0) }}>Done</button>
          <button type="button" className="btn btn-sm btn-dark" onClick={() => { onDelete(todo, 1) }}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem

TodoItem.deafaultProps = {
  todo: {},
}

TodoItem.prototype = {
  todo: PropTypes.object,
}