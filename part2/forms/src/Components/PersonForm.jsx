export const PersonForm = ({
  onSubmitProp,
  nameValueProp,
  nameChangeProp,
  numberValueProp,
  numberChangeProp,
}) => {
  return (
    <div>
      <form onSubmit={onSubmitProp}>
        <div>
          name: <input value={nameValueProp} onChange={nameChangeProp} />
        </div>
        <div>
          number: <input value={numberValueProp} onChange={numberChangeProp} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};
