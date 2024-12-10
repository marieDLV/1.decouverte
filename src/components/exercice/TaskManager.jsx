import { useState } from "react";

function TaskManager() {

    const [tasks, setTasks] = useState([]);
    const [taskDescrition, setTaskDescription] = useState("");
    const [errorMessage, setErrorMessage ] = useState("");

    const handleTaskDescriptionChange = (event) => {
        setTaskDescription(event.target.value);
    }

    const handleAddTask = () => {
        if(!taskDescrition) {
            setErrorMessage("Veuillez saisir une tâche.");
            return;
        }
        setErrorMessage("");
        setTasks([taskDescrition, ...tasks /* ... (spread - itération) */]);
        setTaskDescription("");
    }

    const handleDeleteTask = (task) => {
        if (!task) return;
        setTasks(tasks.filter(t => t !== task));
    }


    return (
        <fieldset>
            <legend>Task Manager</legend>
            <input
                placeholder="Texte de la tâche"
                value={taskDescrition}
                onChange={handleTaskDescriptionChange}
            />
            <button onClick={handleAddTask}>Ajouter une tâche</button>
            {
                errorMessage && <p style={{color: "red"}}>{errorMessage}</p>
            }
            <hr />
            {
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
            }
        </fieldset>
    )
}

export default TaskManager;