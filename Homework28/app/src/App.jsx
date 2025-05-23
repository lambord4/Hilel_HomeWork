import { useState } from 'react';
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function App() {
  const [tasks, setTasks] = useState(["1 task", "2 task", "3 task"]);

  const handleDelete = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <div>
        <p>TODO list</p>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>
            ❌
            </button>
          </li>
        ))}
      </ul>

      <Formik
        initialValues={{ task: '' }}
        validate={values => {
          const errors = {};
          if (!values.task) {
            errors.task = 'Поле обязательно';
          } else if (values.task.length < 5) {
            errors.task = 'Должно быть длиннее 5 символов';
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          setTasks([...tasks, values.task]);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <Field type="text" name="task" placeholder="Новая задача" />
            <ErrorMessage name="task" component="div" className="error" />
            <button type="submit">Добавить</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default App;