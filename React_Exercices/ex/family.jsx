import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
  <div>
    <h2>House {props.lastname}</h2>
    {/* {props.children}   // This method does not pass father's props to the child */}

    { childrenWithProps(props.children, props) }
  </div>
)
