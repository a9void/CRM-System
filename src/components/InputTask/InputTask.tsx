import { useState } from 'react';
import todoAPI from '../../api/todoAPI';
import type { NewTodo } from '../../types/todos';
import './InputTask.scss';

const InputTask = ({ refreshTask }: { refreshTask: () => void }) => {
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');

  const addTodo = async () => {
    if (newTodo.trim() === '') {
      setError('Это поле не может быть пустым');
    } else if (newTodo.trim().length < 2) {
      setError('Минимальная длина текста 2 символа');
    } else if (newTodo.trim().length > 64) {
      setError('Максимальная длина текста 64 символа');
    } else {
      const newTodoData: NewTodo = {
        isDone: false,
        title: newTodo,
      };
      await todoAPI.addTodo(newTodoData);
      setError('');
      setNewTodo('');
      refreshTask();
    }
  };

  return (
    <div className="inputTask">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="inputTask__input"
        placeholder="Task To Be Done..."
      />
      <button className="inputTask__btn btn__blue" onClick={addTodo}>
        Add
      </button>
      {error && <p className="inputTask__error">{error}</p>}
    </div>
  );
};

export default InputTask;
