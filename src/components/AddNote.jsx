import React from 'react'
import { useDispatch } from 'react-redux'

import { notesActions } from '../store'
import "./AddNote.css"

const AddNote = () => {
  const [note, setNote] = React.useState('');
  const dispatch = useDispatch();

  return (
    <div className='add_note'>
      <textarea
        // rows="8"
        // cols="28"
        placeholder='Type to add a note...'
        value={note}
        onChange={(e) => {
          setNote(prevState => prevState = e.target.value)
        }}
        // disabled={true}
        // readOnly={true}
        style={{resize: "none"}}
        onBlur={(e) => {
          dispatch(notesActions.addNote({
            id: Date.now(),
            body: note,
            lastModified: new Date(Date.now()).toLocaleDateString()
          }))
          setNote("");
        }}
      >
      </textarea>  
      <button className='save' onClick={() => {
        dispatch(notesActions.addNote({
          id: Date.now(),
          body: note,
          lastModified: new Date(Date.now()).toLocaleDateString()
        }))
        setNote("");
      }}>Save</button>
    </div>
  )
}

export default AddNote