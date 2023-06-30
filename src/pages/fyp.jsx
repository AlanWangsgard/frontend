import { useEffect, useState } from "react";
import Nav from "./nav";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'

export default function Fyp(){
    let url = 'http://localhost:3000/posts/fyp/' + sessionStorage.getItem('following')
    // getPost(postId)
   
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

    return(
        <>
        <Nav />
        {posts.length > 0 && (
            
            <div className="posts">
            {posts.map((post, index) => <div key={index} className="postContainer"><h3 key={index} className="postUser">{post.user}</h3><p key={post.text} className="postText">{post.text}</p>{post.image != 'n/a' && (<img key={post.image} src={post.image}></img>)}<p key={post.date}>{post.date}</p></div>)}
            </div>
        ) || (<p>Follow someone to see posts here!</p>)}
        </>

    )
}