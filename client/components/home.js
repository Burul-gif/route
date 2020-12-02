import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import Header from './header'
import SearchName from './searchName'
import Users from './users'

const Home = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users').then(({ data }) => setUser(data))
  }, [])
  return (
    <div className="bg-red-700">
      <Header user={user} />
      <Route exact path="/users" component={() => <Users user={user} />} />
      <Route exact path="/mynameis/:username" component={() => <SearchName user={user} />} />
    </div>
  )
}

export default Home
