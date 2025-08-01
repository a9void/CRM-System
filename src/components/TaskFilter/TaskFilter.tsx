import './TaskFilter.scss';

interface TaskFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
  countTask: {
    allCount: number;
    inWorkCount: number;
    completedCount: number;
  };
}

const TaskFilter = ({ filter, setFilter, countTask }: TaskFilterProps) => {
  return (
    <div className="taskFilter">
      <div
        className={`taskFilter__item ${filter === 'all' ? 'active' : ''}`}
        onClick={() => setFilter('all')}
      >
        Все({countTask.allCount})
      </div>
      <div
        className={`taskFilter__item ${filter === 'inWork' ? 'active' : ''}`}
        onClick={() => setFilter('inWork')}
      >
        В работе({countTask.inWorkCount})
      </div>
      <div
        className={`taskFilter__item ${filter === 'completed' ? 'active' : ''}`}
        onClick={() => setFilter('completed')}
      >
        Сделано({countTask.completedCount})
      </div>
    </div>
  );
};

export default TaskFilter;
