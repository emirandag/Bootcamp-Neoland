const express = require('express');

const { createProject, updateProject, deleteProject, getAllProjects, getProject, getOpenProjects } = require("../controllers/projects.controller")
const { isAuth, isAuthManager, isAuthAdmin } = require('../../middlewares/auth.middleware');
const ProjectRoutes = express.Router();

ProjectRoutes.post("/createproject", [isAuthManager], createProject)
ProjectRoutes.patch("/updateproject/:id", [isAuthManager], updateProject)
ProjectRoutes.delete("/deleteproject/:id", [isAuthManager], deleteProject)
ProjectRoutes.get("/", getAllProjects)
ProjectRoutes.get("/:id", getProject)
ProjectRoutes.get("/openprojects/list", getOpenProjects)

module.exports = ProjectRoutes