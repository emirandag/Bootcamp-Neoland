const express = require('express');

const { createTask } = require("../controllers/tasks.controller")

const TaskRoutes = express.Router();

TaskRoutes.post("/createtask", createTask)

module.exports = TaskRoutes