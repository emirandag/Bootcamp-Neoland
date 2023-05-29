const Task = require("../models/task.model")
const Project = require("../models/project.model")
const setError = require('../../helpers/handle-error');

const createTask = async (req, res, next) => {
    try {
        await Task.syncIndexes();
        
        const { title, projectId } = req.body

        //Comprobamos si el proyecto existe y está abierto
        const isOpenProject = await Project.findOne({ _id: projectId, isClosed: false})
        
        console.log(isOpenProject);
        if (!isOpenProject) {
            return res.status(404).json("There isn't open project.")
        } else {
            // Si existe el proyecto y está abierto, creamos la tarea
            const newTask = new Task({
                title,
                project: projectId
            })

        
            //Guardamos la tarea en la base de datos
            await newTask.save()
            let updateProject
            if (newTask) {
                //Pusheamos el ID de la tarea en el array de tareas en Projectos
                isOpenProject.tasks.push(newTask._id)

                // Actualizamos el proyecto
                updateProject = await Project.findByIdAndUpdate(
                    projectId,
                    isOpenProject
                );
                return res.status(201).json(
                    {
                        newTask,
                        updateProject: await Project.findById(projectId).populate("tasks")
                    }
                )
            } else {
                return res.status(404).json("Error create task")
            }
            
        }
    } catch (error) {
        return next(
            setError(error.code || 500, error.message || 'Failed to create task')
          );
    }
}

module.exports = { createTask }