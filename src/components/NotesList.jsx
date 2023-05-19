import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Note from './Note'
import "./NotesList.css"
import AddNote from './AddNote'
import { notesActions } from '../store'

const NotesList = () => {
  const notes = useSelector(state => state.notes);
  const keyword = useSelector(state => state.keyword);
  console.log(notes);
  const dispatch = useDispatch();

  useEffect(() => {
    const nts = localStorage.getItem("notes") && JSON.parse(localStorage.getItem("notes"));
    console.log(nts);

    if(nts) {
      dispatch(notesActions.setNotes({
        notes: [...nts],
      }))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='container'>
      {notes.filter(note => note.body.includes(keyword)).map(note => (
        <Note key={note.id} note={note} />
      ))}
      <AddNote />
    </div>
  )
}

export default NotesList