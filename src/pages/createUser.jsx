import Nav from './nav'

function qs(element){
    return document.querySelector(element)
}

async function createUser(){
    var checkList = []
    let availible = fetch('http://localhost:3000/users/')
    let nameResult = (await availible).json()
    let final = await nameResult
    final.forEach(user =>
        checkList.push(user.userName)
    )
    if(checkList.includes(qs('.userName').value)){
        qs('.errors').innerHTML = 'User already exists, try a different name'
    }else{
    let res = fetch('http://localhost:3000/users',{
        method: "POST",
        body: JSON.stringify({
            userName: qs('.userName').value,
            password: qs('.password').value,
            email: qs('.userEmail').value,
            firstName: qs('.firstName').value,
            lastName: qs('.lastName').value,
            birthDate: qs('.birthDate').value
        }),
        headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
    })
    if((await res).status == 400){
    let resjson = (await res).json()
    let errors = (await resjson)
    let errorsDiv = document.querySelector('.errors')
    errorsDiv.innerHTML = ''
    if (errors.errors){
    errors.errors.forEach(element => {
        let p = document.createElement('p')
        p.innerHTML = element.msg
        errorsDiv.append(p)
    })}
    }else{
        location.href="http://localhost:5173/login"

    }};
    
    
}


export default function CreateUser(){
    return(
        <>
        <Nav />
        <form className='userForm'>
            <input type="text" className="userName" placeholder="Username"/>
            <br></br>
            <input type="password" className="password" placeholder='Password'/>
            <br></br>
            <input type='text' className='firstName' placeholder='First name'/>
            <br></br>
            <input type='text' className='lastName' placeholder='Last Name'/>
            <br></br>
            <input type="email" className="userEmail" placeholder="someone@example.net" />
            <br></br>
            <input type='date' className='birthDate'/>
            <br></br>
            <input type="button" className="userButton" value="Create User" onClick={createUser}/>
        </form >
        <div className='errors'></div>
        </>
    )
}