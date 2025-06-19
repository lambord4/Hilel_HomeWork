import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import TodoApp from './TodoApp';

const renderWithStore = (component) => {
  const store = configureStore({
    reducer: {
      todo: todoReducer,
    },
  });

  return render(<Provider store={store}>{component}</Provider>);
};

test('на странице есть заголовок Todo List', () => {
  renderWithStore(<TodoApp />);
  const heading = screen.getByText(/todo list/i);
  expect(heading).toBeInTheDocument();
});

test('в поле ввода можно ввести текст и цифры', () => {
  renderWithStore(<TodoApp />);
  const input = screen.getByPlaceholderText(/enter new task/i);

  fireEvent.change(input, { target: { value: 'Test123 задача456' } });

  expect(input).toHaveValue('Test123 задача456');
});

test('при пустом поле ввода задача не добавляется', () => {
    renderWithStore(<TodoApp />);
  
    const input = screen.getByPlaceholderText(/enter new task/i);
    const addButton = screen.getByText(/add/i);
  
    fireEvent.change(input, { target: { value: '' } });
  
    fireEvent.click(addButton);
  
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(1); 
  });

  test('после ввода текста и нажатия "Add" появляется новая задача с нужным текстом', () => {
    renderWithStore(<TodoApp />);
  
    const input = screen.getByPlaceholderText(/enter new task/i);
    const addButton = screen.getByText(/add/i);
  
    fireEvent.change(input, { target: { value: 'Новая задача 123' } });
  
    fireEvent.click(addButton);
  
    const newItem = screen.getByText('Новая задача 123');
    expect(newItem).toBeInTheDocument();
  });
  
  test('при клике по чекбоксу задача помечается как выполненная', () => {
    renderWithStore(<TodoApp />);
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
  
    const task = screen.getByText(/sample task/i);
    expect(task).toHaveStyle('text-decoration: line-through');
  });

  test('после нажатия "Delete" задача удаляется из списка', () => {
    renderWithStore(<TodoApp />);
    
    const deleteButton = screen.getByText(/delete/i);
    fireEvent.click(deleteButton);
  
    const task = screen.queryByText(/sample task/i);
    expect(task).not.toBeInTheDocument();
  });

  test('можно отредактировать задачу и сохранить новое значение', () => {
    renderWithStore(<TodoApp />);
  
    const editButton = screen.getByText(/edit/i);
    fireEvent.click(editButton);
  
    const editInput = screen.getByDisplayValue(/sample task/i);
    fireEvent.change(editInput, { target: { value: 'Обновленная задача' } });
  
    const saveButton = screen.getByText(/save/i);
    fireEvent.click(saveButton);
  
    const updatedTask = screen.getByText('Обновленная задача');
    expect(updatedTask).toBeInTheDocument();
  });

  test('после нажатия "Clear Completed" выполненные задачи удаляются', () => {
    renderWithStore(<TodoApp />);
  
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
  
    const clearButton = screen.getByText(/clear completed/i);
    fireEvent.click(clearButton);
  
    const task = screen.queryByText(/sample task/i);
    expect(task).not.toBeInTheDocument();
  });