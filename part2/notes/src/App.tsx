import { useState } from "react";
import "./App.css";
import { NoteForm } from "./components/NoteForm";
import { NoteList } from "./components/NoteList";

function App() {
  const [noteStatus, setNoteStatus] = useState(false);
  const updateNotes = () => {
    setNoteStatus(!noteStatus);
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteForm updateNotes={updateNotes} />
      <NoteList noteStatus={noteStatus} updateNotes={updateNotes}/>
    </div>
  );
}

export default App;
