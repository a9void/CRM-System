import Input from './components/Input';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';

function App() {
  return (
    <>
      <div className="container">
        <Input />
        <TaskFilter />
        <TaskList />
      </div>
    </>
  );
}

export default App;
