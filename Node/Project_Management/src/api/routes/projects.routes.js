const express = require('express');

const { createProject, updateProject, deleteProject } = require("../controllers/projects.controller")

const ProjectRoutes = express.Router();

ProjectRoutes.post("/createproject", createProject)
ProjectRoutes.patch("/updateproject/:id", updateProject)
ProjectRoutes.delete("/deleteproject/:id", deleteProject)

module.exports = ProjectRoutes