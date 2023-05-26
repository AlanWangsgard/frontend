import { Link } from "react-router-dom"

export default function Nav(){
    function logout(){
        sessionStorage.clear()
        location.href="http://localhost:5173/"
    }

    var user = sessionStorage.getItem('userName')
    if (user){
        return (
            <>
            <nav>
                <ul className="navList" >
                    {/* <li>
                        <a href="/profile">{user}</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a onClick={logout}>Logout</a>
                    </li> */}
                    <li>
                        <Link to={'/profile'}>Profile</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <a onClick={logout}>Logout</a>
                    </li>
                </ul>
            </nav>
            </>
        )
    }else{
    return (
        <>
        <nav>
            <ul className="navList" >
              
                <li>
                    <Link to={'/profile'}>Profile</Link>
                </li>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                <Link to={'/login'}>login</Link>
                </li>
            </ul>
        </nav>
        </>
    )
    }
}