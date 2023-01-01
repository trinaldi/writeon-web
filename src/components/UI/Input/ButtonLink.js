import React from 'react'

const ButtonLink = ({ click, inputStyle, children }) => {
  return (
    <button
      onClick={click}
      className={`button ${inputStyle}`}>
      {children}
    </button>
  )
}

export default ButtonLink
