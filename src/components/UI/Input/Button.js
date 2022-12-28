import React from 'react'

const Button = ({ click, inputStyle, children }) => {
  return (
      <small
        onClick={click}
        className={inputStyle}>
        {children}
      </small>
  )
}

export default Button
