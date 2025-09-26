import React from 'react'

export default function UserCard() {
    const users = [
        {id:1, name:"Rehan",role:"Frontend"},
        {id:2, name:"Hannan",role:"Designer"},
        {id:3, name:"Rahil",role:"Backend"}
    ]
  return (
    <div>
      {users.map((user)=>(
        <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.role}</p>
        </div>
      ))}
    </div>
  )
}
