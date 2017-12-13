import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
  <div role="form" className="todoForm" >
    {/* <div className="col-xs-12 col-sm-9 col-md-10"> */}
    <Grid cols="12 9 10">
      <input type="text" 
        id="description" 
        className="form-control"
        placeholder="Add a new task"
        onChange={props.handleChange}
        value={props.description}
      />
    </Grid>
    {/* </div> */}

    <Grid cols="12 3 2">
      {/* <button className="btn btn-primary">
        <i className="fa fa-plus"></i>
      </button> */}
      <IconButton style="primary" icon="plus" 
        onClick={props.handleAdd}  
      />
    </Grid>
  </div>
)