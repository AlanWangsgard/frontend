import Nav from "./nav";
import {qs} from './utility'
import { useParams } from 'react-router-dom'

async function updatePost(userName){
    console.log(qs('.userName').value)
    let url = 'http://localhost:3000/users/' + userName
    let data = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
            username: qs('.userName').value,
            password: qs('.userPassword').value,
            email: qs('.userEmail').value,
            firstName: qs('.firstName').value,
            lastName: qs('.lastName').value,
            birthDate: qs('.birthDate').value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
         
        
    })
    if(data.status == 400){
    let resjson = data.json()
    let errors = (await resjson)
    let errorsDiv = document.querySelector('.errors')
    errorsDiv.innerHTML = ''
    if (errors.errors){
    errors.errors.forEach(element => {
        let p = document.createElement('p')
        p.innerHTML = element.msg
        errorsDiv.append(p)
    })}}else{
    location.href ="http://localhost:5173/account"
    }
    }


async function getUser(userName){
    let url = 'http://localhost:3000/users/' + userName
        let data = await fetch(url)
        let element = await data.json()

        // <form className='userForm'>
        //     <input type="text" className="userName" placeholder="Username"/>
        //     <br></br>
        //     <input type="password" className="password" placeholder='Password'/>
        //     <br></br>
        //     <input type='text' className='firstName' placeholder='First name'/>
        //     <br></br>
        //     <input type='text' className='lastName' placeholder='Last Name'/>
        //     <br></br>
        //     <input type="email" className="userEmail" placeholder="someone@example.net" />
        //     <br></br>
        //     <input type='date' className='birthDate'/>
        //     <br></br>
        //     <input type="button" className="userButton" value="Create User" onClick={createUser}/>
        // </form>
        console.log(element)

            let form = document.createElement('form')
            let user = document.createElement('input')
            let password = document.createElement('input')
            let first = document.createElement('input')
            let last = document.createElement('input')
            let email = document.createElement('input')
            let birth = document.createElement('input')

            form.className = 'updateUserForm'
            user.className = 'userName'
            password.className = 'userPassword'
            first.className = 'firstName'
            last.className = 'lastName'
            email.className = 'userEmail'
            birth.className = 'birthDate'

            user.type = 'text'
            email.type = 'email'
            birth.type = 'date'

            user.value = element.userName
            email.value = element.email
            password.value = element.password
            first.value = element.firstName
            last.value = element.lastName
            birth.value = element.birthDate
            let b = document.createElement('input')
            b.value = 'Update'
            b.type = 'button'
            b.className = 'userButton'
            b.onclick = () => updatePost(userName)

            form.appendChild(user)
            form.appendChild(email)
            form.appendChild(password)
            form.appendChild(first)
            form.appendChild(last)
            form.appendChild(birth)
            form.appendChild(b)

            let contain = document.querySelector('.container')
            contain.appendChild(form)


        
}

export default function EditUser(){
    const {userName} = useParams()
    getUser(userName)
    return(
        <>
        <Nav />
        <div className="container"></div>
        <div className='errors'></div>
        </>
    )
}