import React, { Component } from 'react'

export default class ClasComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.initialValue}
  }

  add(n) {
    this.setState({ value: this.state.value + n })
  }

  render() {
    return (
      <div>
        <h1>{this.props.label}</h1>
        <h2>{this.state.value}</h2>
        <button onClick={() => this.add(1)}> + </button>
        <button onClick={() => this.add(-1)}> - </button>
      </div>
    )
  }
}