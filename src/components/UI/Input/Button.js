import React from 'react'

const Button = (props) => {
  const { click, inputStyle, children } = props

  return (
      <small
        onClick={click}
        className={inputStyle}>
        {children}
      </small>
  )
}

export default Button
