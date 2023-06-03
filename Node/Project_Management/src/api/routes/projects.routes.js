const express = require('express');

const { createProject, updateProject, deleteProject, getAllProjects, getProject, getOpenProjects } = require("../controllers/projects.controller")

const ProjectRoutes = express.Router();

ProjectRoutes.post("/createproject", createProject)
ProjectRoutes.patch("/updateproject/:id", updateProject)
ProjectRoutes.delete("/deleteproject/:id", deleteProject)
ProjectRoutes.get("/", getAllProjects)
ProjectRoutes.get("/:id", getProject)
ProjectRoutes.get("/openprojects/list", getOpenProjects)

module.exports = ProjectRoutes