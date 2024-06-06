const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

let notes = [{ id: 1, content: "firstNote", important: true }];

const idGenerator = () => {
  let id = Math.round(Math.random() * 10000);
  return id;
};
//get all nodes
app.get("/notes", (req, res) => {
  res.json(notes);
});
//create new note
app.post("/notes", (req, res) => {
  const body = req.body;
  console.log(body);
  if (!body) {
    return res.status(400).json({
      error: "need content for note!",
    });
  }
  const note = {
    id: idGenerator(),
    content: body.content,
    important: Boolean(body.important) || false,
  };
  notes = notes.concat(note);
  res.json(note);
});
//delete note
app.delete("/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter((note) => note.id !== id);
  res.status(204).end();
});

const PORT = 3010;
app.listen(PORT, () => {
  console.log(`server running at : ${PORT}`);
});
