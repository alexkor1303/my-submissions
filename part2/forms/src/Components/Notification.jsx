export const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }
  return <div className="addContact">{message}</div>;
};
