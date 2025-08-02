import type { Todo } from '../types/todos';
import type { NewTodo } from '../types/todos';

const url = 'https://easydev.club/api/v1/todos';

const todoAPI = {
  getTodos: async (filter: string): Promise<Todo[]> => {
    try {
      const response = await fetch(`${url}?filter=${filter}`);
      if (!response.ok) {
        throw new Error('Ошибка получения: ' + response.status);
      }
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка получения:', error);
      throw error;
    }
  },

  addTodo: async (newTodo: NewTodo): Promise<Todo> => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });
      if (!response.ok) {
        throw new Error('Ошибка добавления: ' + response.status);
      }
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка добавления:', error);
      throw error;
    }
  },

  deleteTodo: async (idTodo: number): Promise<void> => {
    try {
      const response = await fetch(url + '/' + idTodo, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Ошибка удаления : ' + response.status);
      }
    } catch (error) {
      console.log('Ошибка удаления :', error);
      throw error;
    }
  },

  statusTodo: async (idTodo: number, isDone: boolean): Promise<Todo> => {
    try {
      const response = await fetch(url + '/' + idTodo, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isDone,
        }),
      });
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.log('Ошибка удаления: ', error);
      throw error;
    }
  },

  ediTodo: async (idTodo: number, value: string): Promise<Todo> => {
    try {
      const response = await fetch(url + '/' + idTodo, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: value,
        }),
      });

      if (!response.ok) {
        throw new Error('Ошибка удаления : ' + response.status);
      }
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.log('Ошибка изменения', console.log(error));
      throw error;
    }
  },
};

export default todoAPI;
