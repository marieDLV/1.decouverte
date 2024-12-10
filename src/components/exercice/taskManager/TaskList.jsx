import TaskItem from "./TaskItem";
import PropTypes from 'prop-types';

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