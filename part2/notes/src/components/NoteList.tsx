import { NoteType } from "../types/noteType";
import { useState, useEffect } from "react";
import { getNotes, deleteNote } from "../services/notes";
import cn from "classnames";
interface NoteListProps {
  noteStatus: boolean;
  updateNotes: () => void;
}
export const NoteList = ({ noteStatus, updateNotes }: NoteListProps) => {
  const [notes, setNotes] = useState<NoteType[]>([]);
  useEffect(() => {
    getNotes().then((res) => setNotes(res));
  }, [noteStatus]);

  return (
    <div>
      {notes.map((note) => {
        return (
          <li key={note.id} className={cn({ important: note.important })}>
            {note.content}
            <button
              onClick={() => {
                deleteNote(note.id);
                setTimeout(() => {
                  updateNotes();
                }, 100);
              }}>
              delete
            </button>
          </li>
        );
      })}
    </div>
  );
};
