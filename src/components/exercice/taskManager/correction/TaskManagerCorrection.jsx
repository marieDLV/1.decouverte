import useTaskLogic from './use-task-logic.hook';
// import React from 'react'; // Tout l'export par deéafaut que je renomme React
// React.useState
// const {useState} = React;

/**
 * Formulaire de saisie de tâche
 */
function TaskForm(props) {

    // Destructuration des props
    const { taskDescrition, handleTaskDescriptionChange, errorMessage, handleAddTask } = props;

    return (
        <>
            <input
                placeholder="Texte de la tâche"
                value={taskDescrition}
                onChange={handleTaskDescriptionChange}
            />
            <button onClick={handleAddTask}>Ajouter une tâche</button>
            {
                errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>
            }
        </>
    )
}

// Destructuration des props
/**
 * Composant d'affichage de la liste des tâches
 */
function TaskList( { tasks, handleDeleteTask } ) {

    return (
        !tasks.length
                    ?
                    (<p>Aucune tâche pour le moment.</p>)
                    :
                    (
                        <>
                            <em>Tâches courantes {tasks.length}</em>
                            <ol>
                                {
                                    tasks.map((task, index) => {
                                        return (
                                            <li key={index}>
                                                <span>{task}</span>
                                                <button onClick={() => handleDeleteTask(task)}>Supprimer</button>
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </>
                    )
    )
}

function TaskManagerCorrection() {

    const { 
        tasks, 
        taskDescrition, 
        errorMessage, 
        handleTaskDescriptionChange,
        handleAddTask,
        handleDeleteTask
        } = useTaskLogic();

    return (
        <fieldset>
            <legend>Task Manager</legend>

            <TaskForm
                taskDescrition={taskDescrition}
                handleTaskDescriptionChange={handleTaskDescriptionChange}
                errorMessage={errorMessage}
                handleAddTask={handleAddTask}
                />

            <hr />

            <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />

        </fieldset>
    )
}

export default TaskManagerCorrection;