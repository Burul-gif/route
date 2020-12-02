import React from 'react'
import { useParams } from 'react-router-dom'

const SearchName = ({ user }) => {
  const { username } = useParams()
  const searchedName = user.filter((el) => el.name.includes(username))
  return (
    <div>
      {searchedName.map((el) => {
        return (
          <div key={el.id}>
            <div className="flex items-center justify-center bg-red-700 h-screen font-size: text-5xl">
              My name is {el.name}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SearchName
