import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'
import Field from './field'
const root = document.querySelector('#root')

ReactDOM.render(
  <div>
    <ClassComponent label="Counter" initialValue={10} />
    <br />
    <br />
    <br />
    <Field initialValue="Test" />
  </div>
, root)