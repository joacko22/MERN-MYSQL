import axios from 'axios';

export const getTasksRequest =async () => {
  return await axios.get('http://localhost:4000/tasks');
}
export const deleteTaskRequest = async (id) => {
  return await axios.delete(`http://localhost:4000/tasks/${id}`);
}
/**
 * It takes a task object as an argument, and returns a promise that resolves to the response from the
 * server when the task is created.
 * @param task - {
 * @returns The promise that is returned by the axios.post() method.
 */
export const createTaskRequest = async (task) => {
  return await  axios.post('http://localhost:4000/tasks', task)
}