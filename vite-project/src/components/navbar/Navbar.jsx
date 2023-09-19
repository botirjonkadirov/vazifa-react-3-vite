import './navbar.css'



function Navbar({usersLen}) {
  return (
    <div className='navbar'>
      <div className='navbar-container container'>
        <h1 className='navbar-logo'>User</h1>
        <h3 className='navbar-counter'>{usersLen>0?"you have: "  +usersLen : "you do not have users"}</h3>
      </div>      
    </div>
  )
}

export default Navbar
