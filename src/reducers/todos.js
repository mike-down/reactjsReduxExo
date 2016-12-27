import undoable, { distinctState } from 'redux-undo'

const todo = (state, action) => {
  console.log(action.type);
  console.log(state);
  switch (action.type) {
    case 'ADD_TODO':
      console.log({
        id: action.id,
        text: action.text,
        valid: 0,
        comfirm : false
      })
      return {
        id: action.id,
        text: action.text,
        valid: 0,
        comfirm : false
      }
    case 'INVALID':
      if (state.id !== action.id) {
        return state
      }
      console.log({
        ...state,
        valid:2
      })
      return {
        ...state,
        valid:2
      }
      case 'VALID':
        if (state.id !== action.id) {
          return state
        }
        console.log({
          ...state,
          valid:1
        })
        return {
          ...state,
          valid:1
        }
      case 'COMFIRM':
          if (state.id !== action.id) {
            return state
          }
          console.log({
            ...state,
            comfirm:!state.comfirm
          })
          return {
            ...state,
            comfirm:!state.comfirm
          }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'INVALID':
      return state.map(t =>
        todo(t, action)
      )
    case 'VALID':
      return state.map(t =>
        todo(t, action)
      )
    case 'COMFIRM':
        return state.map(t =>
          todo(t, action)
        )
    default:
      return state
  }
}

const undoableTodos = undoable(todos, {
  filter: distinctState()
})

export default undoableTodos
