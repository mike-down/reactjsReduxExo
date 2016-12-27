let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const invalid = (id) => {
  console.log(id);
  return {
    type: 'INVALID',
    id
}}

export const valid = (id) => ({
  type: 'VALID',
  id
})
export const comfirm = (id) => ({
  type: 'COMFIRM',
  id
})
