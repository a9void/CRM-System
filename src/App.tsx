import { useEffect, useState } from 'react';

import InputTask from './components/InputTask/InputTask';
import TaskFilter from './components/TaskFilter/TaskFilter';
import TaskList from './components/TaskList';
import todoAPI from './api/todoAPI';
import type { Todo } from './types/todos';

function App() {
  const [filter, setFilter] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  // Функция обновления
  const refreshTask = () => {
    todoAPI.getTodos('all').then(setTodos);
  };
  useEffect(() => {
    refreshTask();
  }, [filter]);

  // Счетчики
  const allCount = todos.length;
  const inWorkCount = todos.filter((todo) => !todo.isDone).length;
  const completedCount = allCount - inWorkCount;
  const countTask = {
    allCount,
    inWorkCount,
    completedCount,
  };
  // Фильтрация
  const filteredTodos = (() => {
    if (filter === 'all') {
      return todos;
    } else if (filter === 'inWork') {
      return todos.filter((todo) => !todo.isDone);
    } else if (filter === 'completed') {
      return todos.filter((todo) => todo.isDone);
    }
    return null;
  })();

  return (
    <>
      <div className="container">
        <InputTask refreshTask={refreshTask} />
        <TaskFilter
          filter={filter}
          setFilter={setFilter}
          countTask={countTask}
        />
        <TaskList todos={filteredTodos} refreshTask={refreshTask} />
      </div>
    </>
  );
}

export default App;
