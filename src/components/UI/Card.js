import React from 'react'

const Card = ({ children }) => {
  return (
    <article className="w-60 mt4 mb4 ml-auto mr-auto pa3 shadow-4" >
      {children}
    </article>
  )
}

export default Card
