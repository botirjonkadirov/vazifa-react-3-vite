

import './App.css'
 import Navbar from './components/navbar/Navbar'
 import Footer from './components/footer/Footer'
import { useState } from 'react'
import UserList from './components/userList/UserList'
import NewUser from './components/newUser/NewUser'
function App() {
  const [showMod, setMod]= useState(false)
  const[users, setUsers]= useState([])
const deleteUser = (id)=>{
  setUsers((init)=>{
    return init.filter((use)=>{
      return use.id !==id
    })
  })
}
 
const closeMod = (e)=>{
  if (e.target.className==='overlay') setMod(false)
  if (e.key==='Escape') setMod(false)
}

const addNewuser = (users)=>{
  setUsers((init)=>{
    return {...init, users}
  })
  useState(false)
}
  return (
    <div onClick={closeMod} onKeyDown={closeMod} className='App'>
      <Navbar usersLen = {users.length}/>
      <main>
        <div className="no-users">
        {users.length===0 && <h2>no users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser}/>
      </main>
        {showMod&&<NewUser addNewuser={addNewuser}/>}
      <button onClick={()=>setMod(true)} className='create-user'> Create user</button>
      <Footer/>
    </div>
  )
}

export default App

