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
                    <li>
                        <a href="/profile">{user}</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
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
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
                <li>
                    <a href="/login">Login</a>
                </li>
            </ul>
        </nav>
        </>
    )
    }
}