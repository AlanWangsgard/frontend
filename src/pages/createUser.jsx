import Nav from './nav'

function createUser(){
    fetch('http://localhost:3000/users',{
        method: "POST",
        body: JSON.stringify({
            username: document.querySelector('.userName').value,
            password: document.querySelector('.password').value,
            email: document.querySelector('.userEmail').value
        }),
        headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
    })
    location.href="http://localhost:5173/login"
}

export default function CreateUser(){
    return(
        <>
        <Nav />
        <form className='userForm'>
            <input type="text" className="userName" placeholder="Username"/>
            <br></br>
            <input type="password" className="password" placeholder='Password'/>
            <br></br>
            <input type="email" className="userEmail" placeholder="someone@example.net" />
            <br></br>
            <input type="button" className="userButton" value="Create User" onClick={createUser}/>
        </form>
        </>
    )
}