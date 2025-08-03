import { useEffect, useState } from 'react';

import InputTask from '../components/InputTask/InputTask';
import TaskFilter from '../components/TaskFilter/TaskFilter';
import TaskList from '../components/TaskList';
import todoAPI from '../api/todoAPI';
import type { Todo } from '../types/todos';



import AuthInput from '../UI/Auth/AuthInput/AuthInput';

function TodoListPage() {
  const [filter, setFilter] = useState('');
  const [todos, setTodos] = useState<{
    all: Todo[];
    inWork: Todo[];
    completed: Todo[];
  }>({
    all: [],
    inWork: [],
    completed: [],
  });
  const [counts, setCounts] = useState({
    all: 0,
    inWork: 0,
    completed: 0,
  });

  // Функция обновления
  const refreshTask = async () => {
    const allData = await todoAPI.getTodos('all');
    const inWorkData = await todoAPI.getTodos('inWork');
    const completedData = await todoAPI.getTodos('completed');
    setTodos({
      all: allData,
      inWork: inWorkData,
      completed: completedData,
    });
    setCounts({
      all: allData.length,
      inWork: inWorkData.length,
      completed: completedData.length,
    });
  };
  useEffect(() => {
    refreshTask();
  }, [filter]);

  // Фильтрация
  const filteredTodos = (() => {
    if (filter === 'all') {
      return todos.all;
    } else if (filter === 'inWork') {
      return todos.inWork;
    } else if (filter === 'completed') {
      return todos.completed;
    }
    return null;
  })();

  return (
    <>
      <div className="container">
        <AuthInput />
        <InputTask refreshTask={refreshTask} />
        <TaskFilter filter={filter} setFilter={setFilter} counts={counts} />
        <TaskList todos={filteredTodos} refreshTask={refreshTask} />
      </div>
    </>
  );
}

export default TodoListPage;
