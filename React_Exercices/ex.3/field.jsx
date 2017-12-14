import React, { Component } from 'react'

class Field extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.initialValue }
    // You can bind on each function call or set it always binded as follows
      // this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div>
        <label>{this.state.value}</label>
        <br />
        <input
          onChange={this.handleChange.bind(this)} 
          value={this.state.value}
        />
      </div>
    )
  }
}

export default Field