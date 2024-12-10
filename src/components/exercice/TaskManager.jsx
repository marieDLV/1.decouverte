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

    const handleDeleteTask = ( task ) => {
        if(!task) return;
        setTasks(tasks.filter( t => t !== task ));
    }


    return (
        <fieldset>
            <legend>Task Manager</legend>
            <input placeholder="Texte de la tâche" onChange={handleTaskDescriptionChange}/>
            <button onClick={handleAddTask}>Ajouter une tâche</button>
            <hr/>
            {
              !tasks.length
              ?
              (<p>Aucune tâche pour le moment.</p>)
              : 
              (
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
              )
            }
        </fieldset>
    )
}

export default TaskManager;