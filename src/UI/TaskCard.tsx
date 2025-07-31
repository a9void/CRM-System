import './TaskCard.css';
import edit from '../assets/icon/edit.svg';
import trash from '../assets/icon/trash.svg';

const TaskCard = () => {
  return (
    <div className="taskСard active">
      <div className="task-item">
        <input type="checkbox" className="checkbox" />
        <span>Какая то задача</span>
      </div>
      <div className="btn-container">
        <button className="btn btn-blue">
          <img className="btn-icon" src={edit} alt="edit" />
        </button>
        <button className="btn btn-red">
          <img className="btn-icon" src={trash} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
