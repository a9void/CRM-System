import './TaskFilter.css';

const TaskFilter = () => {
  return (
    <div className="taskFilter">
      <div className="taskFilter-item  active">Все(5)</div>
      <div className="taskFilter-item">В работе(3)</div>
      <div className="taskFilter-item">Сделано(2)</div>
    </div>
  );
};

export default TaskFilter;
