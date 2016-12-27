import { connect } from 'react-redux'
import { invalid } from '../actions'
import { valid } from '../actions'
import { comfirm } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.comfirm);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.comfirm);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
})

const mapDispatchToProps =(dispatch) =>({
  onInvalidation(id){dispatch(invalid(id));},
  onValidation(id){dispatch(valid(id));},
  onComfirmation(id){dispatch(comfirm(id));}
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
