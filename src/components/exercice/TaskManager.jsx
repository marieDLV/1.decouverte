import { useState } from "react";
import TotalTask from "./taskManager/TotalTask";
import TaskList from "./taskManager/TaskList";
import TaskInput from "./taskManager/TaskInput";

function TaskManager() {
    // Déclare un état local pour la nouvelle tâche
    // getter, setter
    const [tache, setTache] = useState('');
    const [listeTaches, setListeTaches] = useState([]);
    const [messageErreur, setMessageErreur] = useState('');

    // Fonction pour ajouter une nouvelle tâche
    const handleAddTask = () => {
        // Vérifie si la tâche est vide
        if (!tache.trim()) {
            setMessageErreur('Veuillez saisir une tâche');
            return;
        }
        // Ajoute la tâche à la liste des tâches
        console.log('Ajouter tache', tache);
        setListeTaches([...listeTaches, tache]);
        // Réinitialise l'input de la tâche
        setTache('');
        // Réinitialise le message d'erreur
        setMessageErreur('');
    }

    // Fonction pour supprimer une tâche par son index
    // On prévoit un index pour identifier la tâche à supprimer
    const handleDeleteTask = (index) => {
        console.log('Supprimer tache', index);
        // Filtre la liste des tâches pour enlever celle avec l'index donné
        setListeTaches(listeTaches.filter((_, i) => i !== index));
    }

    return (
        <>
            <fieldset>
                <legend>TaskManager</legend>
                {/* Composant pour l'input de la tâche */}
                <TaskInput tache={tache} setTache={setTache} ajouterTache={handleAddTask} messageErreur={messageErreur} />
                {/* Composant pour afficher la liste des tâches */}
                <TaskList listeTaches={listeTaches} supprimerTache={handleDeleteTask} />
                {/* Composant pour afficher le nombre total de tâches */}
                <TotalTask nbTotalTask={listeTaches.length} />
            </fieldset>
        </>
    )
}

export default TaskManager;