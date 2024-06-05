import { useState, useEffect } from "react";
import { Filter } from "./Components/Filter";
import { PersonForm } from "./Components/PersonForm";
import { Person } from "./Components/Person";
import { Notification } from "./Components/Notification";
import phonebookService from "./services/Phonebook";
import "./index.css";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);
  //getData from DB
  useEffect(() => {
    phonebookService.getAll().then((data) => setPersons(data));
  }, [persons]);
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
    };

    if (persons.find((person) => person.name === name)) {
      return alert(`${name} is already added to phonebook`);
    }
    phonebookService.create(newPerson);
    setMessage(`user ${newPerson.name} add to phone book!`);
    setTimeout(() => {
      setMessage(null);
    }, 3000);
    setName("");
    setNumber("");
  };
  //delete person from list
  const deletePersonFunc = (id) => {
    if (window.confirm("delete person?")) {
      phonebookService.remove(id);
    }
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
      <Notification message={message} />
      <PersonForm
        onSubmitProp={addPerson}
        nameValueProp={name}
        nameChangeProp={changeName}
        numberValueProp={number}
        numberChangeProp={changeNumber}
      />
      <h3>Numbers</h3>
      <ul>
        {personToShow.map((person) => {
          return (
            <Person
              person={person}
              deleteFunc={() => deletePersonFunc(person.id)}
              key={person.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
