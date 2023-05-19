import React from 'react'
import { useDispatch } from 'react-redux'
import {AiFillDelete} from 'react-icons/ai'

import { notesActions } from '../store'
import "./Note.css";

const Note = ({note}) => {
  const dispatch = useDispatch();

  return (
    <div className="note_container" onClick={() => {
      // dispatch(notesActions.editNote({
      //   id: note.id,
      //   body: note.body, 
      //   lastModified: note.lastModified,
      // }))
    }}>
      <div className='note'>
        {note.body}
      </div>
      <div className='date_container'>
        <span className='note_date'>{note.lastModified}</span>
        <span className='delete_note' onClick={() => {
          dispatch(notesActions.deleteNote({
            id: note.id
          }))
        }}><AiFillDelete /></span>
      </div>
    </div>
  )
}

export default Note