const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const Todos = require("./models/todoSchema");

const app = express();

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to Database"));

app.use(express.json());

// Get all Todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todos.find({});
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Get Todos by ID
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todos = await Todos.findById(id);
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Add Todo
app.post("/todos", async (req, res) => {
  try {
    const todos = await Todos.create(req.body);
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Update a Todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todos.findByIdAndUpdate(id, req.body);
    // we cannot find the todo in the database
    if (!todo) {
      return res.status(404).json(`We cannot find the Todo with the ID ${id}`);
    }
    const updatedTodo = await Todos.findById({ id });
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Delete a Todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todos.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json(`We cannot find the Todo with the ID ${id}`);
    }
    res.status(200).json({ todo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("server is listining in port 3000");
});
