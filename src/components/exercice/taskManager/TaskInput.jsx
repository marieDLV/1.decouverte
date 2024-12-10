
function TaskInput(props) {
    const { tache, setTache, ajouterTache, messageErreur } = props;

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

export default TaskInput