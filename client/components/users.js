import React from 'react'

const Users = ({ user }) => {
  return (
    <div>
      {user.map((el) => {
        return (
          <div key={el.id}>
            <div>{el.name}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Users
