import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'
const root = document.querySelector('#root')

ReactDOM.render(
  <div>
    <Family lastname="Stark">
      <Member firstname="Robb" />
      <Member firstname="Sansa" />
      <Member firstname="Arya" />
      <Member firstname="Bran" />
      <Member firstname="Rickon" />
    </Family>
    <br/>
    <Family lastname="Lannister">
      <Member firstname="Cersei" />
      <Member firstname="Jaime" />
      <Member firstname="Tyrion" />
    </Family>
  </div>
, root)