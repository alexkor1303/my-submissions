import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const mostPopularId = Object.keys(points).reduce((a, b) =>
    points[a] > points[b] ? a : b
  );
  const mostPopular = anecdotes[mostPopularId];

  const onChangeAnecdote = () => {
    console.log(selected);
    setSelected(Math.floor(Math.random() * 8));
  };
  const onVote = () => {
    let newPoints = { ...points };
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={onVote}>vote</button>
      <button onClick={onChangeAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{mostPopular}</p>
    </div>
  );
};

export default App;
