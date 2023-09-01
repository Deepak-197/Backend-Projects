import React, { useState } from 'react';

export const CreateNotes = () => {

   const [title, setTitle] = useState("")
    const [note, setNote] = useState("")
    const [category, setCategory] = useState("")
    const [author, setPass] = useState("")

    const handleSubmit =()=> {
        const payload={
          title,
          note,
          category,
          author
        }
        console.log(payload)

        fetch(`http://localhost:8080/notes/create`,{
            method: 'POST',
            body: JSON.stringify(payload),
            headers:{
              "Content-Type": "application/json",
              "Authorization": localStorage.getItem("token")
            }
        }).then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }


  return (
    <div id='container'>
        <div>Create Notes Page</div>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title' />
        <input type='text' value={note} onChange={(e) => setNote(e.target.value)} placeholder='Enter Notes' />
        <input type='text' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter Category' />
        <input type='text' value={author} onChange={(e) => setPass(e.target.value)} placeholder='Enter Author' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
