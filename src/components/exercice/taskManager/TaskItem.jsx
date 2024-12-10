import PropTypes from 'prop-types';

function TaskItem({ tache, index, supprimerTache }) {

    return (

        <li>
            {tache}
            <button onClick={() => supprimerTache(index)}>
                Supprimer
            </button>
        </li>
    )
}

TaskItem.propTypes = {
    tache: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    supprimerTache: PropTypes.func.isRequired
};

export default TaskItem