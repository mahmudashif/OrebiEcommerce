import React from 'react'

const Dropdown = ({className, children, onClick}) => {
  return (
    <div className={className} onClick={onClick}>{children}</div>
  )
}

export default Dropdown