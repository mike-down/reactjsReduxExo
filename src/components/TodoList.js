import React, { PropTypes } from 'react'
import Todo from './Todo'

/**********************beginStyle************************/
const styles = {
  centre : {
    marginRight: '-15px',
    marginLeft: '-15px'
  }
}
/**********************endStyle************************/
const TodoList = ({ todos, onInvalidation, onValidation, onComfirmation}) => (
  <ul style={styles.centre}>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClickinva={ ()=> onInvalidation(todo.id)}
        onClickva={ ()=> onValidation(todo.id)}
        onClickcomf={ ()=> onComfirmation(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    comfirm: React.PropTypes.bool.isRequired,
    valid: React.PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onInvalidation: PropTypes.func.isRequired,
  onValidation: PropTypes.func.isRequired,
  onComfirmation: PropTypes.func.isRequired

}

export default TodoList
