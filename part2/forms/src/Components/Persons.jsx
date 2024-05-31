export const Persons = ({ personToShow }) => {
  return (
    <div>
      {personToShow.map((obj) => {
        return (
          <p key={obj.id}>
            {obj.name} {obj.number}
          </p>
        );
      })}
    </div>
  );
};
