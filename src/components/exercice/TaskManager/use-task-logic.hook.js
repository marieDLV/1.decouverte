/**
 * Custom Hook - Bonne pratique de refactorisation pour concenter une logique d'état
 * Convention de nommage: useXXX (pour indiquer qu'il s'agit d'un hook de composant fonctionnel)
 */

import { useState } from "react";

export function useTaskLogic() {

    const [tasks, setTasks] = useState([]);
    const [taskDescrition, setTaskDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleTaskDescriptionChange = (event) => {
        setTaskDescription(event.target.value);
    }

    const handleAddTask = () => {
        if (!taskDescrition) {
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

    return {
        tasks,
        taskDescrition,
        errorMessage,
        handleTaskDescriptionChange,
        handleAddTask,
        handleDeleteTask
    }
}