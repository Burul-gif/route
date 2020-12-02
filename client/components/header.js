import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [search, setSearch] = useState('')
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-10">
          <Link className="mx-4" to="/home">
            Home
          </Link>
          <Link className="mx-4" to="/users">
            Users
          </Link>
          <div className="text-white">
            <input
              placeholder="user name"
              value={search}
              type="text"
              className="m-4  border-solid  bg-gray-900 border-b-2  outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link to={`/mynameis/${search}`}>Search</Link>
          </div>
          <div />
        </div>
      </nav>
    </div>
  )
}

export default Header
