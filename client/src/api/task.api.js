import axios from 'axios';

/**
 * It takes a task object as an argument, and returns a promise that resolves to the response from the
 * server when the task is created.
 * @param task - {
 * @returns The promise that is returned by the axios.post() method.
 */
export const createTaskRequest = async (task) => {
  return await  axios.post('http://localhost:8080/tasks', task)
}