import { useEffect, useState } from "react";
import Nav from "./nav";
import { useParams } from 'react-router-dom'

export default function Profile(){
    const {userName} = useParams()
    var fol = []
    let list = sessionStorage.getItem('following')
    if (list){
        fol = list.split(',')
    }
    
   
    let url = 'http://localhost:3000/posts/' + userName
   
        const [posts, setPosts] = useState([])

        const fetchData = () => {
            fetch(url)
            .then(response => {
                return response.json()
            }).then(data => {
                setPosts(data)
            })
        }
    

    useEffect(() => {
        fetchData()
    }, [])

    function follow(a){
        let list = []
        if (fol.length > 0){
        list = fol
        }
        list.push(a)
        fetch('http://localhost:3000/users/follow/' + sessionStorage.getItem('userName'),{
            method: 'PUT',
            body: JSON.stringify({
            follow: list,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
        sessionStorage.setItem('following', list)
        location.reload()

    }
    function unFollow(a){
        let list = []
        if (fol.length > 0){
        list = fol
        }
        list.pop(a)
        fetch('http://localhost:3000/users/follow/' + sessionStorage.getItem('userName'),{
            method: 'PUT',
            body: JSON.stringify({
            follow: list,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
        sessionStorage.setItem('following', list)
        location.reload()
        
    }

    return(
        <>
        <Nav />
        <h1 className="profileUser">{userName}</h1>
        {fol.includes(userName) && (
            <button className="unfollow" onClick={() =>unFollow(userName)}>Unfollow</button>
        ) || sessionStorage.getItem('userName') && (<button className="follow" onClick={() => follow(userName)}>Follow</button>)}
        
        {}
        {posts.length > 0 && (
            
            <div className="posts">
            {posts.map((post, index) => <div key={index} className="postContainer"><h3 key={index} className="postUser">{post.user}</h3><p key={post.text} className="postText">{post.text}</p>{post.image != 'n/a' && (<img key={post.image} src={post.image}></img>)}</div>)}
            </div>
        )}
        </>

    )
}