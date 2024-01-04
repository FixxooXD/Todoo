const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const Todos = require("./models/todoSchema");
const cors = require('cors')

const app = express();

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to Database"));

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors("http://127.0.0.1:5173"))
app.use(cors("https://todoo-21kagpvew-fixxooxd.vercel.app/"))


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

app.put("/todos/:id", async (req, res) => {
  try {
   const id = req.params.id
   const updateData = await Todos.findOneAndUpdate({_id: id}, req.body, {new: true})
   res.json(updateData)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Update a Todo
app.patch("/todos/:id", async (req, res) => {
  try {
   const id = req.params.id
   const updateDate = await Todos.findOneAndUpdate({_id: id}, req.body, {new: true})
   res.json(updateDate)
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
