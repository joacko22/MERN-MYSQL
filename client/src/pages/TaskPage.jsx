import React from "react";
import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/task.api";
import {TaskCard} from "../components/TaskCard";

export const TaskPage = () => {
  const [tasks, setTasks] = useState([]);// useState is a hook that allows us to use state in a functional component


 /* A hook that allows us to use state in a functional component. */
  useEffect(() => {
    //useEffect se ejecuta cada vez que se renderiza la pagina
    const loadTask = async () => {
      const response = await getTasksRequest();
     // console.log(response.data);
     setTasks(response.data);
    }
    loadTask();
  }, []);
  function renderMain() {/* Mapping the tasks array and returning a TaskCard component for each task. */
  return tasks.map(task => (<TaskCard key={task.id} task={task} />))}
  return (
    <div>
      <h1>
        Tasks
      </h1>
      {renderMain()}
     
    </div>
  );
};
