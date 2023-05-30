const Project = require("../models/project.model")
const Task = require("../models/task.model")
const setError = require('../../helpers/handle-error');

/**
 * ----------------------- CREATE PROJECT -----------------------
 */
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


/**
 * ----------------------------- UPDATE PROJECT -----------------------------------------
 */
const updateProject = async (req, res, next) => {
    try {
        await Project.syncIndexes();
        //Recuperamos el ID que ponemos por parámetro
        const { id } = req.params

        const updateProjectById = await Project.findById(id).populate("tasks")

        //console.log(updateProjectById.tasks);

        updateProjectById.tasks.forEach(async task => {
            try {
            if (task.isCompleted.contain(false)) {
                return res.status(404).json(`Error -In the project, there is still an open the task '${task.title}'.`)
            } else {
                
                    await Project.findByIdAndUpdate(id, { isClosed: true })
                    const testUpdateProject = await Project.findById(id).populate("tasks")

                    if (testUpdateProject) {
                        return res.status(201).json(
                            {
                                testUpdateProject, 
                                result: `Updated project. The project '${testUpdateProject.title}' is closed.` }
                        )
                    } else {
                        return res.status(404).json('The project is not update')
                    }
                
            }
        } catch (error) {
            return res.status(404).json('Error update project"')
        }
        })
    } catch (error) {
        return next(setError(error.code || 500, error.message || 'Failed to update project'));
    }
}



/**
 * ------------------------------ DELETE PROJECT -----------------------------------------
 */
const deleteProject = async (req, res, next) => {
    try {
        //Recuperamos el ID que ponemos por parámetro
        const { id } = req.params

        const projectById = await Project.findByIdAndDelete(id)
        await Task.deleteMany({ project: id })

        if (projectById) {
            res.status(200).json(projectById)
            
        } else {
            res.status(404).json('Error delete project')
        }
    } catch (error) {
        return next(setError(error.code || 500, error.message || 'Failed to delete project'));
    }
}


module.exports = { createProject, updateProject, deleteProject }