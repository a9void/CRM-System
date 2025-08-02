import './TaskFilter.scss';

interface TaskFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
  counts: {
    all: number;
    inWork: number;
    completed: number;
  };
}

const TaskFilter = ({ filter, setFilter, counts }: TaskFilterProps) => {
  return (
    <div className="taskFilter">
      <div
        className={`taskFilter__item ${filter === 'all' ? 'active' : ''}`}
        onClick={() => setFilter('all')}
      >
        Все({counts.all})
      </div>
      <div
        className={`taskFilter__item ${filter === 'inWork' ? 'active' : ''}`}
        onClick={() => setFilter('inWork')}
      >
        В работе({counts.inWork})
      </div>
      <div
        className={`taskFilter__item ${filter === 'completed' ? 'active' : ''}`}
        onClick={() => setFilter('completed')}
      >
        Сделано({counts.completed})
      </div>
    </div>
  );
};

export default TaskFilter;
