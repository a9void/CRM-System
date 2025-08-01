import TaskCard from '../UI/TaskCard/TaskCard';
import type { Todo } from '../types/todos';
interface TaskListProps {
  todos: Todo[];
}

const TaskList = ({ todos }: TaskListProps) => {
  return (
    <div className="taskList">
      {todos.map((todo) => {
        return <TaskCard key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TaskList;
