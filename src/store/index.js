import { createSlice, configureStore } from '@reduxjs/toolkit';

const date = (date) => {
  const currDate = new Date(date).toLocaleDateString();;


  return currDate;
}

const initialState = {
  notes: [
    {id: 1, body: "note 1", lastModified: date(Date.now())},
    {id: 2, body: "note number 2", lastModified: date(Date.now())},
    {id: 3, body: "send 8000", lastModified: date(Date.now())},
  ], //{id: 1, body: "body", lastModified: Date.now()}
  activeNote: null,
  keyword: "",
}

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes(state, action) {
      state.notes = action.payload.notes;
    },
    addNote(state, action) {
      if(action.payload.body === "") return;
      state.notes.push(action.payload);
    },
    deleteNote(state, action) {
      console.log(action.payload.id);
      const id = action.payload.id;
      const newNotes = state.notes.filter(note => note.id !== id);
      state.notes = [...newNotes];
    },
    editNote(state, action) {

    },
    searchNote(state, action) {

    },
    setActiveNote(state, action) {

    },
    filterNotes(state, action) {
      console.log(action.payload.keyword);
      state.keyword = action.payload.keyword;
    }
  }
});

export const notesActions = notesSlice.actions;

const store = configureStore({
  reducer: notesSlice.reducer
})

export default store;