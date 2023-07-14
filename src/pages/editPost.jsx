import { useEffect, useState } from "react";
import Nav from "./nav";
import { useParams } from 'react-router-dom'

async function updatePost(postId){
    console.log(document.querySelector('.text').value)
    let url = 'http://localhost:3000/posts/' + postId
    let data = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
            text: document.querySelector('.text').value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
         
        
    })
    location.href ="http://localhost:5173/account"
}


// async function getPost(postId){
//     let url = 'http://localhost:3000/posts/byId/' + postId
//         let data = await fetch(url)
//         let posts = await data.json()

//         posts.forEach(element =>{
//             let t = document.createElement('textarea')
//             t.value = element.text
//             t.className = "text"

//             let b = document.createElement('button')
//             b.innerHTML = 'update'
//             b.onclick = () => updatePost(postId)

//             let contain = document.querySelector('.container')
//             contain.appendChild(t)
//             contain.appendChild(b)


//         })
// }

export default function EditPost(){
    const {postId} = useParams()
    let url = 'http://localhost:3000/posts/byId/' + postId
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
        <div className="container"></div>
        {posts.length > 0 && (
            <div>
            {posts.map((post, index) => <textarea key={postId} className="text" defaultValue={post.text}></textarea>)}
            </div>
        )}
        <button onClick={() => updatePost(postId)} >Update</button>
        </>
    )
}