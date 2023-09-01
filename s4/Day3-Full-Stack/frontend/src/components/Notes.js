import React, { useEffect, useState } from 'react'

export const Notes = () => {
    const [notes, setNotes] = useState("")


    const handleDeleteNote = (noteID) => {
      fetch(`http://localhost:8080/notes/delete/${noteID}`,{
        method: 'DELETE',
        headers:{
          "Authorization": localStorage.getItem("token")
        }
        }).then(res => res.json())
        .then(res => {
          console.log(res)
          
        })
        .catch(err => console.error(err))
    }

    useEffect(() => {
      fetch(`http://localhost:8080/notes`,{
            headers:{
              "Authorization": localStorage.getItem("token")
            }
        }).then(res => res.json())
        .then(res => {
          console.log(res)
          setNotes(res)
        })
        .catch(err => console.error(err))
    }, []);

    console.log(notes)

  return (
    <div className='cccccc'>
        <h1>All The Notes here</h1>
        
          {notes? notes.map((el) => {
                 return(
                  <div key={el._id}>
                    <h2>Title: {el.title}</h2>
                    <p>Note: {el.note}</p>
                    <p>Category: {el.category}</p><br></br>
                    <p>Author: {el.author}</p>
                    <button onClick={() => handleDeleteNote(el._id)}>Delete</button>
                  </div>
                 )
          }):(<h1>No Notes Available</h1>)}
        
        
    </div>
  )
}
