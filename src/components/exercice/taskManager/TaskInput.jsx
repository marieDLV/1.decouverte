/**
 * Composant permettant de saisir une tâche
 * "TaskInput" est un composant qui prend 4 props:
 * - tache: texte de la tâche à ajouter
 * - setTache: fonction pour mettre à jour le texte de la tâche
 * - ajouterTache: fonction pour ajouter la tâche
 * - messageErreur: message d'erreur à afficher
 * 
 * @example
 * <TaskInput
 * tache={'tache 1'}
 * setTache={(e) => console.log(e)}
 * ajouterTache={(e) => console.log(e)}
 * messageErreur={'erreur'} />
 * 
 */

function TaskInput({ tache, setTache, ajouterTache, messageErreur }) {

    return (
        <>
            <input placeholder="Text de la tâche" value={tache} onChange={(event) => setTache(event.target.value)} />
            <button disabled={!tache} onClick={ajouterTache}>Ajouter</button>
            {
                messageErreur &&
                <p style={{ color: 'red' }}> {messageErreur} </p>
            }
        </>
    )
}

TaskInput.propTypes = {
    tache: PropTypes.string.isRequired,
    setTache: PropTypes.func.isRequired,
    ajouterTache: PropTypes.func.isRequired,
    messageErreur: PropTypes.string.isRequired
};

export default TaskInput;