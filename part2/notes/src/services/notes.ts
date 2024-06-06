import axios from "axios";
import { NewNote } from "../types/noteType";
const baseUrl = "http://localhost:3010/notes";

const getNotes = async () => {
  try {
    const res = await axios.get(`${baseUrl}`);
    return res.data;
  } catch (error) {
    console.error("cant get notes from server", error);
    throw error;
  }
};

const pushNotes = (note: NewNote) => {
  return axios
    .post(`${baseUrl}`, note)
    .then((res) => {
      console.log("note added!", res.data);
    })
    .catch((error) => {
      console.error("error adding note", error);
      throw error;
    });
};

const deleteNote = (id: number) => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then((res) => {
      console.log("note deleted", res.data);
    })
    .catch((error) => {
      console.error("cant delete note", error);
      throw error;
    });
};
export { getNotes, pushNotes, deleteNote };
