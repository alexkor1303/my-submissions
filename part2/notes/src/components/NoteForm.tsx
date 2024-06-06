import { useState } from "react";
import { NewNote } from "../types/noteType";
import { pushNotes } from "../services/notes";
interface NoteFormProps {
  updateNotes: () => void;
}
export const NoteForm = ({ updateNotes }: NoteFormProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isImportant, setImportant] = useState(false);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const changeImprotant = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImportant(e.target.checked);
  };

  const pushNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) {
      return alert("enter some text");
    }
    const newNote: NewNote = { content: inputValue, important: isImportant };
    pushNotes(newNote);
    setTimeout(() => {
      updateNotes();
    }, 100);
    setInputValue("");
    setImportant(false);
  };

  return (
    <form onSubmit={pushNote}>
      <label htmlFor="noteContent">Create new note</label>
      <input id="noteContent" value={inputValue} onChange={changeValue} />
      <br />
      <label htmlFor="importantState">Важно</label>
      <input
        type="checkbox"
        id="importantState"
        checked={isImportant}
        onChange={changeImprotant}
      />
      <br />
      <button>create</button>
    </form>
  );
};
