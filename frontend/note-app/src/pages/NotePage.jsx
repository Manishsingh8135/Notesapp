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

    let getNote = async () =>{
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}`)
        let data = await response.json()
        
        setNote(data)
       
    }

    
    let updateNote = async () =>{
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/update` ,{
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(note)
        })
    }

    
        let handleSubmit = () =>{
            updateNote()
            navigate('/')
        }


  return (
    <div className='note'>
        <div className="note-header">
            <h3>   
                <ArrowLeft onClick={handleSubmit} />
               
            </h3>
           
        </div>
        <textarea onChange={(e) => {setNote({...note,'body':e.target.value})}} defaultValue={note?note.body:""}></textarea>
       

    </div>
  )
}

export default NotePage


