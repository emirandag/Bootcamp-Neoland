const express = require('express');

const { createTask, updateTask, deleteTask, getAllTasks,  getTask, getOpenTasks } = require("../controllers/tasks.controller")

const TaskRoutes = express.Router();

TaskRoutes.post("/createtask", createTask)
TaskRoutes.patch("/updatetask/:id", updateTask)
TaskRoutes.delete("/deletetask/:id", deleteTask)
TaskRoutes.get("/", getAllTasks)
TaskRoutes.get("/:id", getTask)
TaskRoutes.get("/opentasks/list", getOpenTasks)

module.exports = TaskRoutes