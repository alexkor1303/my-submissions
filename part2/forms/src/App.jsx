import { useState } from "react";
import { Filter } from "./Components/Filter";
import { PersonForm } from "./Components/PersonForm";
import { Persons } from "./Components/Persons";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  const personToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().startsWith(filter.toLowerCase())
      )
    : persons;

  const changeFilterValue = (event) => {
    setFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: name,
      number: number,
      id: Math.floor(Math.random() * (100 - 4) + 4),
    };

    if (persons.find((person) => person.name === name)) {
      return alert(`${name} is already added to phonebook`);
    }

    setPersons(persons.concat(newPerson));
    setName("");
    setNumber("");
  };

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeNumber = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={changeFilterValue} />
      <h3>add a new</h3>

      <PersonForm
        onSubmitProp={addPerson}
        nameValueProp={name}
        nameChangeProp={changeName}
        numberValueProp={number}
        numberChangeProp={changeNumber}
      />

      <h3>Numbers</h3>
      <Persons personToShow={personToShow} />
    </div>
  );
};

export default App;
