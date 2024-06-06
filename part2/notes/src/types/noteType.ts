type NoteType = {
  id: number;
  content: string;
  important: boolean;
};
type NewNote = Omit<NoteType, "id">;

export type { NoteType, NewNote };
