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

export default TaskForm;