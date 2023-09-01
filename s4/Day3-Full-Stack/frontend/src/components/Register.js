import React, { useState } from 'react'

export const Register = () => {
     
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [pass, setPass] = useState("")

    const handleRegister =()=> {
        const payload={
            name,
            email,
            age,
            pass
        }
        console.log(payload)

        fetch(`http://localhost:8080/users/register`,{
            method: 'POST',
            body: JSON.stringify(payload),
            headers:{
              "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }

  return (
    <div id='container'>
        <div>Registration Page</div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
        <input type='text' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Enter Age' />
        <input type='password' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Enter Password' />
        <button onClick={handleRegister}>Submit</button>
    </div>
  )
}
