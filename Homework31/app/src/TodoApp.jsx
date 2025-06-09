import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  load,
  add,
  remove,
  toggle,
  edit,
  clearCompleted,
} from './todoSlice';

export default function TodoApp() {
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();

  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    dispatch(load([
      { id: '1', text: 'Sample task', completed: false },
    ]));
  }, [dispatch]);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(add(input));
      setInput('');
    }
  };

  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const handleSave = () => {
    dispatch(edit({ id: editingId, newText: editText }));
    setEditingId(null);
    setEditText('');
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        placeholder="Enter new task..."
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggle(todo.id))}
            />

            {editingId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.text}
                </span>
                <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
              </>
            )}
            <button onClick={() => dispatch(remove(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>

      <button onClick={() => dispatch(clearCompleted())}>
        Clear Completed
      </button>
    </div>
  );
}
