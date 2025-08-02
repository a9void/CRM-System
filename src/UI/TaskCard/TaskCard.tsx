import './TaskCard.scss';
import editImg from '../../assets/icon/edit.svg';
import trashImg from '../../assets/icon/trash.svg';
import okImg from '../../assets/icon/ok.svg';
import cancelImg from '../../assets/icon/cancel.svg';
import type { Todo } from '../../types/todos';
import todoAPI from '../../api/todoAPI';
import { useState } from 'react';

interface TaskCardProps {
  todo: Todo;
  refreshTask: () => void;
}

const TaskCard = ({ todo, refreshTask }: TaskCardProps) => {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);
  const [error, setError] = useState('');

  const deleteTodo = async (idTodo: number) => {
    await todoAPI.deleteTodo(idTodo);
    refreshTask();
  };

  const toggleIsDoneTodo = async (idTodo: number, isDone: boolean) => {
    await todoAPI.statusTodo(idTodo, isDone);
    refreshTask();
  };

  const updateTodo = async (idTodo: number, editVaue: string) => {
    if (editVaue.trim() === '') {
      setError('Это поле не может быть пустым');
    } else if (editVaue.trim().length < 2) {
      setError('Минимальная длина текста 2 символа');
    } else if (editVaue.trim().length > 64) {
      setError('Максимальная длина текста 64 символа');
    } else {
      await todoAPI.ediTodo(idTodo, editVaue);
      setError('');
      setEdit(false);
      refreshTask();
    }
  };

  /*   const updateTodo = async (idTodo: number, editVaue: string) => {
    await todoAPI.ediTodo(idTodo, editVaue);
    refreshTask();
    setEdit(false);
  }; */

  return (
    <div className={`taskCard ${todo.isDone ? 'active' : ''} `}>
      <div className="taskCard__item">
        {!edit ? (
          <>
            <input
              type="checkbox"
              className="taskCard__checkbox"
              checked={todo.isDone}
              onChange={(e) => toggleIsDoneTodo(todo.id, e.target.checked)}
            />
            <span>{todo.title}</span>
          </>
        ) : (
          <>
            <input
              type="text"
              className="taskCard__inputEdit"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            {error && <p className="taskCard__input-error">{error}</p>}
          </>
        )}
      </div>
      <div className="taskCard__btn-container">
        {!edit ? (
          <>
            <button className="btn btn__blue">
              <img
                className="btn__icon"
                onClick={() => setEdit(true)}
                src={editImg}
                alt="редактировать"
              />
            </button>
            <button
              className="btn btn__red"
              onClick={() => deleteTodo(todo.id)}
            >
              <img className="btn__icon" src={trashImg} alt="удалить" />
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn__green"
              onClick={() => updateTodo(todo.id, editValue)}
            >
              <img className="btn__icon" src={okImg} alt="принять" />
            </button>
            <button className="btn btn__red" onClick={() => setEdit(false)}>
              <img className="btn__icon" src={cancelImg} alt="отменить" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
