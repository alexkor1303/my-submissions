import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};
const create = (newPerson) => {
  return axios.post(baseUrl, newPerson);
};
const remove = (personId) => {
  return axios.delete(`${baseUrl}/${personId}`);
};
const update = (personId, newPerson) => {
  return axios.put(`${baseUrl}/${personId}`, newPerson);
};
export default { getAll, create, remove, update };
