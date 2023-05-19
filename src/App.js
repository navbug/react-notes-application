import { useSelector } from "react-redux";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import { useEffect } from "react";


const App = () => {
  const notes = useSelector((state) => state.notes);

  return (
    <>
      <h2>Notes_</h2>
      <Search />
      <NotesList />
    </>
  );
}

export default App;
