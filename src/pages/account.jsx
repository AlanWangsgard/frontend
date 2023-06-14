import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './nav'

export  default function Account(){
    // const [data, setData] = useState()

    async function getPosts(){
        
        let url = 'http://localhost:3000/posts/' + sessionStorage.getItem('userName')
        let data = await fetch(url)
        // console.log(await data.json())
        let posts = await data.json()

        
        posts.forEach(element => {
            let div = document.createElement('div')
            let h3 = document.createElement('h3')
            let p = document.createElement('p')
            let edit = document.createElement('button')
            let deletePost = document.createElement('button')
    
            p.innerHTML = element.text 
            h3.innerHTML = element.user
            p.className = 'postText'
            h3.className = 'postUser'
            div.className ='postContainer'
            edit.className = 'editPost'
            deletePost.className = 'deletePost'
            edit.innerHTML = 'Edit'
            deletePost.innerHTML = 'Delete'
            edit.onclick = () => editPost(element._id)
            deletePost.onclick = () => trashPost(element._id)
           
            div.appendChild(h3)
            div.appendChild(p)
            
            if (element.image != 'n/a'){
                let img = document.createElement('img')
                img.setAttribute('src', element.image)
                img.className = 'postImg'
                div.appendChild(img)
            }
    
            div.appendChild(edit)
            div.appendChild(deletePost)
            let container = document.querySelector('.posts')
            container.appendChild(div)
        });
        
    }

    function editPost(id){
        location.href="http://localhost:5173/editPost/" + id
    }

    function trashPost(id){
        let result = fetch('http://localhost:3000/posts/' + id, {method: 'DELETE'})
        location.reload()
    }

getPosts()
//    console.log(posts)
    // fetch(url).then(res => res.json()).then(setData)

    // let url = 'http://localhost:3000/posts/' + sessionStorage.getItem('userName')
    // useEffect(() => {
    //     setData([])
    
    // fetch(url).then(res => res.json()).then(setData)
    // }, [url])

    const user = sessionStorage.getItem('userName')
    if (!user){
        location.href = "http://localhost:5173/"
    }

    // console.log(data)
    // data.map(<>{data.text}</>)

    return (
    <>
    <Nav />
    <div className='profileContent'>
    <h1 className='profileUser'>{user}</h1>
    <div className='posts'></div>
    </div>
    <Link to={`/editUser/` + user}>Edit Account</Link>
    </>
    )
}