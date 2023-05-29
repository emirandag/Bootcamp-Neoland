const express = require('express');

const { createProject } = require("../controllers/projects.controller")

const ProjectRoutes = express.Router();

ProjectRoutes.post("/createproject", createProject)

module.exports = ProjectRoutes