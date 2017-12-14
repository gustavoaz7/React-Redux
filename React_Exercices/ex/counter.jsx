import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, stepChanged } from './counterActions'

const Counter = props => (
  <div>
    <h1>{props.counter.number}</h1>
    <input type="number"
      onChange={props.stepChanged}
      value={props.counter.step} 
    />
    <button onClick={props.inc}> + </button>
    <button onClick={props.dec}> - </button>
  </div>
)

const mapStateToProps = state => ({ counter: state.counter })
const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec, stepChanged }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)