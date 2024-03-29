const express = require('express');

const { createProject, updateProject, deleteProject, getAllProjects, getProject, getOpenProjects } = require("../controllers/projects.controller")
const { isAuth, isAuthManager, isAuthAdmin } = require('../../middlewares/auth.middleware');
const ProjectRoutes = express.Router();

ProjectRoutes.post("/createproject", [isAuthManager], createProject)
ProjectRoutes.patch("/updateproject/:id", [isAuthManager], updateProject)
ProjectRoutes.delete("/deleteproject/:id", [isAuthManager], deleteProject)
ProjectRoutes.get("/", [isAuthManager], getAllProjects)
ProjectRoutes.get("/:id", [isAuthManager], getProject)
ProjectRoutes.get("/openprojects/list", [isAuthManager], getOpenProjects)

module.exports = ProjectRoutes