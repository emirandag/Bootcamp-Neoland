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
    const { id } = req.params;

    const updateProjectById = await Project.findById(id).populate('tasks');

    // Filtramos por las tareas que todavía no se encuentran completadas
    const openTasksInProject = updateProjectById.tasks.filter(
      (task) => !task.isCompleted
    );

    // Comprobamos si hay tareas abiertas
    if (openTasksInProject.length > 0) {
      // Hacemos un map y buscamos el título de las tareas.
      const openTaskTitles = openTasksInProject.map((task) => task.title);

      // Con el .join unimos las tareas en caso de que hubiera más de una abierta.
      return res
        .status(404)
        .json(
          `Error - In the project, there are still open tasks: ${openTaskTitles.join(
            ', '
          )}.`
        );
    } else {
      try {
        await Project.findByIdAndUpdate(id, { isClosed: true });
        const testUpdateProject = await Project.findById(id).populate('tasks');

        // Hacemos un test y comprobamos si el proyecto ya está cerrado
        if (testUpdateProject) {
          return res.status(201).json({
            testUpdateProject,
            result: `Updated project. The project '${testUpdateProject.title}' is closed.`,
          });
        } else {
          return res.status(404).json('The project is not updated.');
        }
      } catch (error) {
        return res.status(404).json('Error update project"');
      }
    }
  } catch (error) {
    return next(
      setError(error.code || 500, error.message || 'Failed to update project')
    );
  }
};



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



/**
 * -------------------------- GET ALL PROJECTS -----------------------------
 */
const getAllProjects = async (req, res, next) => {
  try {
    const getProjects = await Project.find()

    if (getProjects) {
      res.status(200).json(getProjects)
    } else {
      res.status(404).json('Error not found the projects')
    }
  } catch (error) {
    return next(setError(error.code || 500, error.message || 'Failed to list all projects'));
  }
}


/**
 * -------------------------- GET PROJECT BY ID -----------------------------
 */
const getProject = async (req, res, next) => {
  try {
    const { id } = req.params
    const getProjectById = await Project.findById(id)

    if (getProjectById) {
      res.status(200).json(getProjectById)
    } else {
      res.status(404).json('Error the project not exist')
    }
  } catch (error) {
    return next(setError(error.code || 500, error.message || 'Failed to list project'));
  }
}

/**
 * -------------------------- GET OPEN PROJECTS -----------------------------
 */
const getOpenProjects = async (req, res, next) => {
  try {
    const openProjects = await Project.find({ isClosed: false })

    if (openProjects) {
      res.status(200).json(openProjects)
    } else {
      res.status(404).json('There arent open projects')
    }
  } catch (error) {
    return next(setError(error.code || 500, error.message || 'Failed to list projects'));
  }
}

module.exports = { createProject, updateProject, deleteProject, getAllProjects, getProject, getOpenProjects }