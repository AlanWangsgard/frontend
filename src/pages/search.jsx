import { useEffect, useState } from "react";
import Nav from "./nav";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'

export default function Search(){
    let url = 'http://localhost:3000/users/'
    // getPost(postId)
   
        const [users, setUsers] = useState([])

        const fetchData = () => {
            fetch(url)
            .then(response => {
                return response.json()
            }).then(data => {
                setUsers(data)
            })
        }
    

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <>
        <Nav />
        {users.length > 0 && (
            <div>
            {users.map(user => <div key={user.userName}><Link to={'/profile/' + user.userName} key={user.userName}>{user.userName}</Link></div>)}
            </div>
        )}
        </>

    )
}