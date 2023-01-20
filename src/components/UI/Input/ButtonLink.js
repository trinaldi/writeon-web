import React from 'react'

const ButtonLink = ({ click, className, children }) => {
  return (
    <button
      onClick={click}
      className={`button ${className}`}>
      {children}
    </button>
  )
}

export default ButtonLink
