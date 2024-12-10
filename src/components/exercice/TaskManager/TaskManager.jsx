import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useTaskLogic } from "./use-task-logic.hook";

function TaskManager() {

    const { 
        tasks, 
        taskDescrition, 
        errorMessage, 
        handleTaskDescriptionChange,
        handleAddTask,
        handleDeleteTask
        } = useTaskLogic();

    return (
        <fieldset>
            <legend>Task Manager</legend>

            <TaskForm
                taskDescrition={taskDescrition}
                handleTaskDescriptionChange={handleTaskDescriptionChange}
                errorMessage={errorMessage}
                handleAddTask={handleAddTask}
                />

            <hr />

            <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />

        </fieldset>
    )
}

export default TaskManager;
