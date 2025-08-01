import './TaskCard.scss';
import edit from '../../assets/icon/edit.svg';
import trash from '../../assets/icon/trash.svg';
import type { Todo } from '../../types/todos';

interface TaskCardProps {
  todo: Todo;
}

const TaskCard = ({ todo }: TaskCardProps) => {
  return (
    <div className={`taskCard ${todo.isDone ? 'active' : ''} `}>
      {' '}
      {/*   */}
      <div className="taskCard__item">
        <input type="taskCard__checkbox" className="checkbox" />
        <span>{todo.title}</span>
      </div>
      <div className="taskCard__btn-container">
        <button className="btn btn__blue">
          <img className="btn__icon" src={edit} alt="edit" />
        </button>
        <button className="btn btn__red">
          <img className="btn__icon" src={trash} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
