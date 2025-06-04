// src/App.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople } from './features/swapi/swapiSlice';
import { addTodo, clearTodos } from './features/todo/todoSlice';
import './App.css' 

function App() {
  const dispatch = useDispatch();
  const { people, loading, error } = useSelector((state) => state.swapi);
  const todos = useSelector((state) => state.todo.items);
  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>🌌 SWAPI + TODO</h1>

      <h2>Персонажи из Star Wars:</h2>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}
      <ul>
        {people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>

      <hr />

      <h2>TODO список:</h2>
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Добавьте задачу"
      />
      <button onClick={handleAddTodo}>Добавить</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>📝 {todo.text}</li>
        ))}
      </ul>

      <footer style={{ marginTop: '2rem' }}>
        <button onClick={() => dispatch(clearTodos())}>
          🧹 Очистить TODO
        </button>
      </footer>
    </div>
  );
}

export default App;

