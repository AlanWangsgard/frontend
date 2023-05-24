import Nav from './nav'

export default function Login(){
    return(
        <>
        <Nav />
        <form className='loginForm'>
            <input type="text" className="username" placeholder="Username"/>
            <br></br>
            <input type="password" className="password" placeholder='Password'/>
            <br></br>
            <input type="button" className="loginButton" value="Login"/>
        </form>
        </>
    )
}