import React from 'react'
import {Formik} from 'formik'
export const TaskForm = () => {
  return (
    <div>
      <Formik>
        <Form>
        <label>Task</label>
        <input type="text" name="task" placeholder='Write a title' />

        <label>Description</label>
        <textarea name="description" rows="3" placeholder='Write a description' />
        <button type="save">Save</button>
        </Form>
      </Formik>

    </div>
  )
}
export default TaskForm;