import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markDone, markUndo, remove } from './todoActions'

const TodoList = props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'done' : ''}>{todo.description}</td>
        <td>
          <IconButton style='success' icon="check" hide={todo.done}
            onClick={() => props.markDone(todo)}
          />
          <IconButton style="warning" icon="undo" hide={!todo.done}
            onClick={() => props.markUndo(todo)}
          />
          <IconButton style='danger' icon="trash-o" hide={!todo.done}
            onClick={() => props.remove(todo)}
          />
        </td>
      </tr>
    ))
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th className="tableActions">Action</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch => bindActionCreators({ markDone, markUndo, remove }, dispatch)
export default connect (mapStateToProps, mapDispatchToProps)(TodoList)