import { useState } from "react";
import TotalTask from "./taskManager/TotalTask";
import TaskList from "./taskManager/TaskList";
import TaskInput from "./taskManager/TaskInput";

function TaskManager() {

    const [tache, setTache] = useState('');
    const [listeTaches, setListeTaches] = useState([]);
    const [messageErreur, setMessageErreur] = useState('');

    const handleAddTask = () => {
        if (!tache.trim()) {
            setMessageErreur('Veuillez saisir une tâche');
            return;
        }
        console.log('Ajouter tache', tache);
        setListeTaches([...listeTaches, tache]);
        setTache('');
        setMessageErreur(''); // Réinitialiser le message d'erreur
    }

    const handleDeleteTask = (index) => {
        console.log('Supprimer tache', index);
        setListeTaches(listeTaches.filter((_, i) => i !== index));
    }

    return (
        <>
            <fieldset>
                <legend>TaskManager</legend>
                <TaskInput tache={tache} setTache={setTache} ajouterTache={handleAddTask} messageErreur={messageErreur} />
                <TaskList listeTaches={listeTaches} supprimerTache={handleDeleteTask} />
                <TotalTask nbTotalTask={listeTaches.length} />
            </fieldset>

            

        </>
    )
}

export default TaskManager