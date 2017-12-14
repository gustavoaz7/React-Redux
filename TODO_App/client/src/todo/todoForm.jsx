import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search, add, clear } from './todoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.search()
  }
  
  keyHandler(e) {
    const { add, clear, search, description } = this.props
    if (e.key === 'Enter') e.shiftKey ? search() : add(description)
    else if (e.key === 'Escape') clear();
  }
  
  render() {
    const { add, clear, search, description } = this.props
    return (
      <div role="form" className="todoForm" >
        <Grid cols="12 9 10">
          <input type="text" 
            id="description" 
            className="form-control"
            placeholder="Add a new task"
            onChange={this.props.changeDescription}
            value={description}
            onKeyUp={this.keyHandler.bind(this)}
          />
        </Grid>
    
        <Grid cols="12 3 2">
          <IconButton style="primary" icon="plus" 
            onClick={() => add(description)}  
          />
          <IconButton style="info" icon="search" 
            onClick={search}  
          />
          <IconButton style="default" icon="close" 
            onClick={clear}  
          />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)