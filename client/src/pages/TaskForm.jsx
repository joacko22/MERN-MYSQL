import React from "react";
import { Formik, Form } from "formik";
export const TaskForm = () => (
  <div>
    <Formik
      /* initialValues es un estado que al hacer handleChange se va rellenando */
      initialValues={{
        title: "",
        description: "",
      }}
      onSubmit={(values) => {
        console.log(values);//values es un objeto con los valores del formulario es para mostrar los valores en consola que se han introducido
      }}
    >
      {( { handleChange,handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <label>Task</label>
          <input
            type="text"
            name="title"
            placeholder="Write a title"
            /*Cuando el usuario tipea o escribe se va guardando en el handleChange del initialValues*/
            onChange={handleChange}
          />

          <label>Description</label>
          <textarea
            name="description"
            rows="3"
            placeholder="Write a description"
            /*Cuando el usuario tipea o escribe se va guardando en el handleChange del initialValues*/
            onChange={handleChange}
          />

          <button type="submit">Save</button>
        </Form>
      )}
    </Formik>
  </div>
);
