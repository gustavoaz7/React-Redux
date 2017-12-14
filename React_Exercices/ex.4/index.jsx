import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import ClassComponent from './classComponent'
import Field from './field'
import fieldReducer from './fieldReducer'
const root = document.querySelector('#root')

const reducers = combineReducers({
  field: fieldReducer
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Field initialValue="Test" />
  </Provider>
, root)