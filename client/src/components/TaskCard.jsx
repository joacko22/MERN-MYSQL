import React from 'react'
import { deleteTaskRequest } from '../api/task.api';
export const TaskCard= ({ task }) => {
    
    const handleDelete =async (id) => {
       try {
        const response =await deleteTaskRequest(id);
        console.log(response);
       } catch (error) {
        logError(error);
       }
    }
  return (
     (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <span>{task.done == 1 ? "✔️": "❌"}</span>
          <button onClick={() =>handleDelete(task.id) }>Delete</button>
          <button>Edit</button>
        </div>
      )
  )
}

