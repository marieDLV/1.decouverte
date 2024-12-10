import TaskItem from "./TaskItem";
import PropTypes from 'prop-types';
/**
 * Composant permettant de lister les tâches
 * 
 * "TaskList" est un composant qui prend 2 props:
 * - listeTaches: tableau de tâches à afficher
 * - supprimerTache: fonction pour supprimer une tâche
 * 
 * @example
 * 
 * <TaskList 
 *  listeTaches={['tache 1', 'tache 2']} 
 *  supprimerTache={(e) => console.log(e)} />
 */
function TaskList({ listeTaches, supprimerTache }) {

    return (
        <>
        {
            !listeTaches.length
                ?
                <p style={{ color: 'brown' }}>Aucune tâche pour le moment</p>
                :
                <ol>
                    {
                        listeTaches.map((tache, index) => (
                            <TaskItem 
                            key={index}
                            tache={tache}
                            index={index}
                            supprimerTache={supprimerTache}/>
                        ))
                    }
                </ol>
        }
        </>
    )
}

TaskList.propTypes = {
    listeTaches: PropTypes.array.isRequired,
    supprimerTache: PropTypes.func.isRequired
};

export default TaskList