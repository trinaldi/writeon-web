import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Typography/Title';

const Header = () => {
  return (
    <header className="flex pv4 justify-center nowrap">
      <div className="flex-column flex-fixed tc black">
        <Link to="/" className="mt3 no-underline">
          <Title>WriteOn</Title>
        </Link>
        <Link to="/create" className="mt3 no-underline">
          submit write on
        </Link>
      </div>
    </header>
  )
}

export default Header
