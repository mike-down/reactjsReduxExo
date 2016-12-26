import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      listStyleType : 'none',
      textDecoration: completed ? 'line-through' : 'none',
      borderBottom : '1px solid white',
      width: '100%',
      marginRight: '-20px',
      marginLeft: '-20px'
  }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
