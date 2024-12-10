import { useState } from "react";



function TaskManager(){

    const [tasks, setTasks] = useState([]);
    const [taskDescrition, setTaskDescrition] = useState("");

    const handleTaskDescriptionChange = (event) => {
        setTaskDescrition(event.target.value);
    }

    const handleAddTask = () => {
        setTasks([taskDescrition, ...tasks /* ... (spread - itération) */]);
        setTaskDescrition("");
    }


    return (
        <fieldset>
            <legend>Task Manager</legend>
            <input placeholder="Texte de la tâche" onChange={handleTaskDescriptionChange}/>
            <button onClick={handleAddTask}>Ajouter une tâche</button>
            <hr/>
            <p>Aucune tâche pour le moment.</p>
            <ol>
                <li>
                    <span>Tâche 1</span>
                    <button>Supprimer</button>
                </li>
            </ol>
        </fieldset>
    )
}

export default TaskManager;