import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './todosSlice';

export default function Todos() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.list);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(addTodo(text.trim()));
      setText('');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', textAlign: 'center' }}>
      <h2>TODO Список</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Новая задача..."
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>

      <ul style={{ textAlign: 'left' }}>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <footer style={{ marginTop: 20 }}>
        Всего задач: {todos.length}
      </footer>
    </div>
  );
}
