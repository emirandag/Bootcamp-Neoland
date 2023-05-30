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


/**
 * ---------------------------- UPDATE TASK ---------------------------------
 */
const updateTask = async (req, res, next) => {
    try {
        await Task.syncIndexes()
        //Recuperamos el ID de la tarea que introducimos por parámetro
        const { id } = req.params

        const updateTaskById = await Task.findByIdAndUpdate(id, { isCompleted: true })

        if (updateTaskById) {
            const testUpdateTask = await Task.findById(id)
            return res.status(200).json({testUpdateTask, result: `Updated task. The task '${testUpdateTask.title}' is completed.` })
        } else {
            return res.status(404).json('Error update task')
        }

    } catch (error) {
        return next(setError(error.code || 500, error.message || 'Failed to update task'));
    }
}


/**
 * ---------------------------- DELETE TASK ----------------------------------
 */
const deleteTask = async (req, res, next) => {
    try {
        //Recuperamos el ID de la tarea que introducimos por parámetro
        const { id } = req.params

        //Buscamos la tarea por ID y la eliminamos
        const taskById = await Task.findByIdAndDelete(id)

        //console.log(taskById.project);
        // De la tarea recuperamos el projecto(ID) y actualizamos el proyecto. 
        // Con el $pull eliminamos de un array existente la instancia o instancias de un valor que coinciden con una condición específica.
        // En este caso, eliminamos la tarea dentro del array de tareas en la colección Project
        const projectId = taskById.project
        await Project.findByIdAndUpdate(projectId, { $pull: { tasks: id } })

        if (taskById) {
            return res.status(200).json(taskById)
            
        } else {
            return res.status(404).json('Error delete task')
        }
    } catch (error) {
        return next(setError(error.code || 500, error.message || 'Failed to delete task'));
    }
}


module.exports = { createTask, updateTask,  deleteTask }