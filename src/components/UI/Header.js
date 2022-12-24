import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex pv4 justify-center nowrap">
      <div className="flex-column flex-fixed tc black">
        <Link to="/" className="no-underline black">
          <h1 className="fw7 mb3">WriteOn</h1>
        </Link>
        <Link to="/create" className="mt3 no-underline">
          submit write on
        </Link>
      </div>
    </div>
  )
}

export default Header
