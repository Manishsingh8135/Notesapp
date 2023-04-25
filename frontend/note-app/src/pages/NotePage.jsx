import React,{useState,useEffect} from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'



const NotePage = () => {
    const navigate = useNavigate()

    const {id} = useParams()
    let [note,setNote]=useState(null)

    useEffect(() =>{
        getNote(note)
    },[id])



        // this route is for getting all the notes
    let getNote = async () =>{

        if (id==='new') return
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}`)
        let data = await response.json()
        
        setNote(data)
       
    }

            // this function handels update functionality    
        let createNote = async () =>{
            let response = await fetch(`http://127.0.0.1:8000/api/notes/create` ,{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(note)
            })
        }
        




            // this function handels update functionality    
    let updateNote = async () =>{
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/update` ,{
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(note)
        })
    }

                   // this function handels delete functionality    

    let deleteNote = async ()=>{
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/delete`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        navigate('/')
    }

               // this function handels submit functionality    
    let handleSubmit = () =>{
            if (id!=='new' && note.body){
                deleteNote()
            }else if(id!=='new'){
                updateNote()
            }else if(id==='new' && note.body!==null){
                createNote()
            }
            navigate('/')
        }


  return (
    <div className='note'>
        <div className="note-header">
            <h3>   
                <ArrowLeft onClick={handleSubmit} />
            </h3>
            {id!=='new'?(
                 <button  onClick={deleteNote}>Delete</button>
            ):(
                <button onClick={handleSubmit} >Done</button>
            )}
           
           
        </div>
        <textarea onChange={(e) => {setNote({...note,'body':e.target.value})}} defaultValue={note?note.body:""}></textarea>
       

    </div>
  )
}

export default NotePage


