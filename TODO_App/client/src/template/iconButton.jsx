import React from 'react'

export default props => {
  if(props.hide) return null;
  return (
    <button className={'btn btn-' + props.style}
      onClick={props.onClick}>
    <i className={'fa fa-' + props.icon} />
    </button>
  )
}