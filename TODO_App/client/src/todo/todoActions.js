import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = e => ({
  type: 'DESCRIPTION_CHANGED',
  payload: e.target.value
})

export const search = () => (dispatch, getState) => {
  const description = getState().todo.description   // Gets description current state so filter is not cleared on btn click
  const search = description ? `&description__regex=/${description}/` : ''
  const req = axios.get(`${URL}?sort=-createdAt${search}`)
  .then(res => dispatch({ type: 'TODO_SEARCHED', payload: res }))
}

export const add = (description) => {
  // thunk middleware lets you return a function with dispatch as a parameter to dispatch the actions to the reducers
  return dispatch => {
    axios.post(URL, { description })
    .then(res => dispatch( clear() ))
    .then(res => dispatch( search() ))
  }
}

export const clear = () => ([ { type: 'TODO_CLEAR' }, search() ])  // multi middleware lets you return more than 1 action

// Items will be updated/removed from database, so just refreshing afterwards is enought
export const markDone = todo => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
    .then(res => dispatch( search() ))
  }
}

export const markUndo = todo => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
    .then(res => dispatch( search() ))
  }
}

export const remove = todo => {
  return dispatch => {
    axios.delete(`${URL}/${todo._id}`)
    .then(res => dispatch( search() ))
  }
}