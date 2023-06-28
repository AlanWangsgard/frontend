import { useEffect, useState } from "react";
import Nav from "./nav";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'

export default function Search(){
    // let uname = document.querySelector('.userName').value
    var url = 'http://localhost:3000/users/search/'
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
    

    // useEffect(() => {
    //     fetchData()
    // }, [])

    function search(){
        users.length < 1 && (document.querySelector('.searchText').style.display = 'block')
        url = 'http://localhost:3000/users/search/' + document.querySelector('.searchUser').value
        fetchData()
    }

    return(
        <>
        <Nav />
        <input className="searchUser" type="text" placeholder="username"></input>
        <button className="searchUserButton" onClick={search}>Search</button>
        {users.length > 0 && (
            <div>
            {users.map(user => <div key={user.userName}><Link to={'/profile/' + user.userName} className="userLink" key={user.userName}>{user.userName}</Link></div>)}
            </div>
        ) || <p className="searchText">No users Found</p>}
        </>

    )
}