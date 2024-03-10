import React from 'react'

const Search = ({placeholder,className,style}) => {
  return (
    <input type="text" placeholder={placeholder} className={className} style={style} />
  )
}

export default Search