import TaskCard from '../UI/TaskCard/TaskCard';
import type { Todo } from '../types/todos';
interface TaskListProps {
  todos: Todo[] | null;
  refreshTask: () => void;
}

const TaskList = ({ todos, refreshTask }: TaskListProps) => {
  return (
    <div className="taskList">
      {todos
        ? todos.map((todo) => {
            return (
              <TaskCard key={todo.id} todo={todo} refreshTask={refreshTask} />
            );
          })
        : null}
    </div>
  );
};

export default TaskList;
