import React from 'react'

const UserLogged = ({setuser, user}) => {
    
  const handleLogout =()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setuser()
  }

  return (
    <article>
        <header>
            <img src={user?.gender === 'female' ? '/female.png' : '/male.png'} alt='user photo' />
        </header>
        <h2>
            {user.firstName} {user.lastName}
        </h2>
        <button onClick={handleLogout}>Log out</button>
    </article>
  )
}

export default UserLogged