import Nav from './nav'
import { Link } from "react-router-dom"

async function login(){
    var username = document.querySelector(".username").value
    var password = document.querySelector(".loginPassord").value
    let url = 'http://localhost:3000/users/' + username
    let user = await fetch(url,{
        method: 'GET'
    })
    var element = document.querySelector(".userError")
    try{
    var data = await user.json()
    if (data.password == password){
        sessionStorage.setItem('userName', data.userName)
        location.href="http://localhost:5173/"
    }else{
        element.style.display = 'block'
        element.innerHTML = "Passowrd did not match, try again"
    }
    }
    catch(e){
        element.style.display = 'block'
        element.innerHTML = "Username not found, try again"
    }
    
}

export default function Login(){
    return(
        <>
        <Nav />
        <div className='loginDiv'>
        
        <form className='loginForm'>
            <input type="text" className="username" placeholder="Username"/>
            <br></br>
            <input type="loginPassord" className="loginPassord" placeholder='Password'/>
            <br></br>
            <input type="button" className="loginButton" value="Login" onClick={login}/>
        </form>
        <p className='userError'></p>
        <Link to={'/createUser'}>No Account? Create one here!</Link>
        {/* <a href='http://localhost:5173/createUser'>No Account? Create one here!</a> */}
        </div>
        </>
    )
}