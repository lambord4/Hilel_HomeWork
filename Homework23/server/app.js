import express from "express";
import cors from "cors";
import { todos as todoList } from "./data.js";

const app = express();
const port = 3000;

let todos = [...todoList];

app.use(cors());
app.use(express.json());

app.post("/api/todos", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Потрібен title" });

  const newTodo = {
    id: Date.now(),
    title,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// READ
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// UPDATE
app.put("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;

  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: "Не знайдено" });

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// DELETE
app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});
