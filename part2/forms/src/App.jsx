import { useState, useEffect } from "react";
import axios from "axios";
import { Filter } from "./Components/Filter";
import { PersonForm } from "./Components/PersonForm";
import { Persons } from "./Components/Persons";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  //person filter
  const personToShow = filter
    ? persons.filter((person) =>
        person.name.toLowerCase().startsWith(filter.toLowerCase())
      )
    : persons;

  const changeFilterValue = (event) => {
    setFilter(event.target.value);
  };
  //add person on list
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
  //getData from DB
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
    });
  }, []);

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
