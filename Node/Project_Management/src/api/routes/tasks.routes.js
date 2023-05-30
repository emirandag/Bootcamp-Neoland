const express = require('express');

const { createTask, updateTask, deleteTask } = require("../controllers/tasks.controller")

const TaskRoutes = express.Router();

TaskRoutes.post("/createtask", createTask)
TaskRoutes.patch("/updatetask/:id", updateTask)
TaskRoutes.delete("/deletetask/:id", deleteTask)

module.exports = TaskRoutes