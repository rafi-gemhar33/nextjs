import React from 'react'

function User({ users}) {
  return (
    <div>
      <h1>User List</h1>
      {
        users.map(function (user) {
          return(
            <div key={user.id}>
              <div>Name: {user.name}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export async function getStaticProps(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()

  return {
    props: {
      users: data
    }
  };
}

export default User
