import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = { description: '', list: [] }
  }
  handleAdd() {
    console.log(this)
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }

  render() {
    return (
      <div>
        <PageHeader name="Todos" small="Register" />
        <TodoForm 
          handleAdd={this.handleAdd.bind(this)}
          handleChange={this.handleChange.bind(this)}
          description={this.state.description}
        />
        <TodoList />
      </div>
    )
  }
}