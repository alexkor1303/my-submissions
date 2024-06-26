export const Person = ({ person, deleteFunc }) => {
  return (
    <li>
      {person.name} {person.number}
      <button onClick={deleteFunc}>delete</button>
    </li>
  );
};
