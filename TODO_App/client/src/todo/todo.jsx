import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = { description: '', list: [] }
    this.refresh()
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt${search}`)
    .then(res => this.setState({ ...this.state, description, list: res.data }))
  }

  handleAdd() {
    console.log(this.state.description)
    axios.post(URL, { description: this.state.description })
    .then(res => this.refresh())
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
    .then(res => this.refresh(this.state.description))
  }

  handleDone(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
    .then(res => this.refresh(this.state.description))
  }

  handleUndo(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
    .then(res => this.refresh(this.state.description))
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  handleClear() {
    this.refresh()
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
          handleSearch={this.handleSearch.bind(this)}
          handleClear={this.handleClear.bind(this)}
        />
        <TodoList 
          list={this.state.list} 
          handleRemove={this.handleRemove.bind(this)}
          handleDone={this.handleDone.bind(this)}
          handleUndo={this.handleUndo.bind(this)}
        />
      </div>
    )
  }
}