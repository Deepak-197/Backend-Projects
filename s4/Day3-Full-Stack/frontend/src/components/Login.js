import React, { useState } from 'react'

export const Login = () => {

    
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleSubmit =()=> {
        const payload={
           
            email,
            pass
            
        }
        console.log(payload)

        fetch(`http://localhost:8080/users/login`,{
            method: 'POST',
            body: JSON.stringify(payload),
            headers:{
              "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(res => {
          console.log(res)
          localStorage.setItem("token", res.token)
        })
        .catch(err => console.error(err))
    }
  return (
    <div id='container'>
        <div>Login Page</div>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
        <input type='password' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Enter Password' />
        <button onClick={handleSubmit}>Submit</button>
        
    </div>
  )
}
