import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  загрузить, добавить, удалить, отметить,
  редактировать, очиститьЗавершённые,
} from './todoSlice';
import './App.css'

export default function TodoApp() {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const [input, setInput] = useState('');
  const [editing, setEditing] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    dispatch(загрузить([
      { id: '1', text: 'Пример задачи', completed: false },
    ]));
  }, [dispatch]);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(добавить(input));
      setInput('');
    }
  };

  const handleEdit = (id, text) => {
    setEditing(id);
    setEditText(text);
  };

  const handleSave = () => {
    dispatch(редактировать({ id: editing, newText: editText }));
    setEditing(null);
    setEditText('');
  };

  return (
    <div>
      <h2>Список задач</h2>
      <input
        type="text"
        value={input}
        placeholder="Новая задача..."
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Добавить</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(отметить(todo.id))}
            />
            {editing === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                />
                <button onClick={handleSave}>Сохранить</button>
              </>
            ) : (
              <>
                <span
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                >
                  {todo.text}
                </span>
                <button onClick={() => handleEdit(todo.id, todo.text)}>Редактировать</button>
              </>
            )}
            <button onClick={() => dispatch(удалить(todo.id))}>Удалить</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(очиститьЗавершённые())}>
        Очистить завершённые
      </button>
    </div>
  );
}
