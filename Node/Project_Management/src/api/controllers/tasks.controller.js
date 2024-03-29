const Task = require("../models/task.model")
const Project = require("../models/project.model")
const User = require("../models/user.model")
const setError = require('../../helpers/handle-error');

const createTask = async (req, res, next) => {
    try {
        await Task.syncIndexes();
        
        const { title, projectId } = req.body

        // Buscamos el proyecto por el ID que hemos desestructurado por el body
        const foundProject = await Project.findById(projectId)
        //const isOpenProject = await Project.findOne({ _id: projectId, isClosed: false})
        

        if (!foundProject) { // Comprobamos si el proyecto existe
            return res.status(404).json("The project not exist")
        } else if (foundProject.isClosed == true) { // Comprobamos is el proyecto está abierto. No se puede crear una tarea asignada a un proyecto cerrado.
            return res.status(404).json("The project is not open")
        } else {

          try {
            // Si existe el proyecto y está abierto, creamos la tarea
            const newTask = new Task({
              title,
              project: projectId
          })

      
          //Guardamos la tarea en la base de datos
          await newTask.save()

          // Comprobamos si la tarea existe
          if (newTask) {
      
              try {
                  // Si existe, pusheamos el ID de la tarea en el array de tareas en Projectos
                  foundProject.tasks.push(newTask._id)
                  // Actualizamos el proyecto
                  await Project.findByIdAndUpdate(projectId, foundProject);

                  const updateProject = await Project.findById(projectId).populate("tasks")

                  // Comprobamos si la tarea se ha actualizado en el array de tareas en el proyecto
                  if (updateProject.tasks.toString().includes(newTask._id)) {

                      return res.status(201).json(
                          {
                              newTask,
                              updateProject,
                              result: `The task '${newTask.title}' has been created in the project '${updateProject.title}`
                          }
                      )
                  } else {
                      return res.status(404).json('The task is not in the project')
                  }
                  
              } catch (error) {
                  return res.status(404).json(error.message)
              }                
              
          } else {
              return res.status(404).json("Error to create task")
          } 
          } catch (error) {
           return res.status(404).json(error.message) 
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

        // Buscamos y actualizamos la tarea
        let foundTask = await Task.findById(id) 
        
        foundTask.isCompleted == false ? await Task.findByIdAndUpdate(id, { isCompleted: true }) : await Task.findByIdAndUpdate(id, { isCompleted: false })
        //const updateTaskById = await Task.findByIdAndUpdate(id, { isCompleted: true })

        if (foundTask) {
            const testUpdateTask = await Task.findById(id)
            return testUpdateTask.isCompleted == true ?
            res.status(200).json({testUpdateTask, result: `Updated task. The task '${testUpdateTask.title}' is completed.` }) :
            res.status(200).json({testUpdateTask, result: `Updated task. The task '${testUpdateTask.title}' is not completed.` })
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

        try {
          //Buscamos la tarea por ID y la eliminamos
          const taskById = await Task.findByIdAndDelete(id)
          // De la tarea recuperamos el projecto(ID) y actualizamos el proyecto. 
          const projectId = taskById.project
          const userId = taskById.assignedTo

          try {
            await Project.findByIdAndUpdate(projectId, { $pull: { tasks: id } })
          } catch (error) {
            return res.status(404).json(error.message)
          }
          // Con el $pull eliminamos de un array existente la instancia o instancias de un valor que coinciden con una condición específica.
          // En este caso, eliminamos la tarea dentro del array de tareas en la colección Project
  
          try {
            // Actualizamos todos los usuarios que tenga asociado 
            await User.findByIdAndUpdate(userId, { $pull: { tasks: id } })
          } catch (error) {
            return res.status(404).json(error.message)
          }
          
          
          const isDeletedTask = await Task.findById(id)
          if (!isDeletedTask) {
              return res.status(200).json('Task deleted OK')
              
          } else {
              return res.status(404).json('Error delete task')
          }
        } catch (error) {
          return res.status(404).json(error.message)
        }
        
    } catch (error) {
        return next(setError(error.code || 500, error.message || 'Failed to delete task'));
    }
}



/**
 * -------------------------- GET ALL TASKS -----------------------------
 */
const getAllTasks = async (req, res, next) => {
    try {
      const getTasks = await Task.find()
  
      if (getTasks) {
        res.status(200).json(getTasks)
      } else {
        res.status(404).json('Error not found the tasks')
      }
    } catch (error) {
      return next(setError(error.code || 500, error.message || 'Failed to list all tasks'));
    }
  }
  
  
  /**
   * -------------------------- GET TASK BY ID -----------------------------
   */
  const getTask = async (req, res, next) => {
    try {
      const { id } = req.params
      const getTaskById = await Task.findById(id)
  
      if (getTaskById) {
        res.status(200).json(getTaskById)
      } else {
        res.status(404).json('Error the task not exist')
      }
    } catch (error) {
      return next(setError(error.code || 500, error.message || 'Failed to list task'));
    }
  }
  
  /**
   * -------------------------- GET OPEN TASKS -----------------------------
   */
  const getOpenTasks = async (req, res, next) => {
    try {
      const openTasks = await Task.find({ isCompleted: false })
  
      if (openTasks) {
        res.status(200).json(openTasks)
      } else {
        res.status(404).json('There arent open projects')
      }
    } catch (error) {
      return next(setError(error.code || 500, error.message || 'Failed to list projects'));
    }
  }

module.exports = { 
  createTask, 
  updateTask,  
  deleteTask, 
  getAllTasks,  
  getTask, 
  getOpenTasks 
}