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

export default TaskList