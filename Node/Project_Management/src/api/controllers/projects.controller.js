const Project = require("../models/project.model")
const setError = require('../../helpers/handle-error');

const createProject = async (req, res, next) => {
    try {
        await Project.syncIndexes();
        //Extraemos los datos del proyecto del body
        const newProject = req.body

        //Creamos un nuevo proyecto instanciando el modelo Project
        const postProject = new Project(newProject)

        const savedProject = await postProject.save()

        if (savedProject) {
            return res.status(201).json(savedProject)
        } else {
            return res.status(404).json('Error create Project')
        }
    
    } catch (error) {
        return next(
            setError(error.code || 500, error.message || 'Failed to create project')
          );
    }
}

module.exports = { createProject }