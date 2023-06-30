import Nav from './nav'


export default function Home(){
    async function getPosts(){
        let data = await fetch('http://localhost:3000/posts/')
        // console.log(await data.json())
        let posts = await data.json()
        posts.forEach(element => {
            let div = document.createElement('div')
            let h3 = document.createElement('h3')
            let p = document.createElement('p')
            let p2 = document.createElement('p')
    
            p.innerHTML = element.text 
            h3.innerHTML = element.user

            p2.innerHTML = element.date

            p.className = 'postText'
            h3.className = 'postUser'
            div.className ='postContainer'
            p2.className = 'postDate'
            div.appendChild(h3)
            div.appendChild(p)
            
            if (element.image != 'n/a'){
                let img = document.createElement('img')
                img.setAttribute('src', element.image)
                img.className = 'postImg'
                div.appendChild(img)
            }
            div.appendChild(p2)

    
            let container = document.querySelector('.posts')
            container.appendChild(div)
        });
    }
    getPosts()

    return (
    <>
    <Nav />
    <div className='posts'>
    </div>
    </>
    )
}