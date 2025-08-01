import type { Todo } from '../types/todos';
import type { NewTodo } from '../types/todos';

const url = 'https://easydev.club/api/v1/todos';

const todoAPI = {
  getTodos: async (filter: string): Promise<Todo[]> => {
    try {
      const response = await fetch(`${url}?filter=${filter}`);
      if (!response.ok) {
        throw new Error('Ошибка: ' + response.status);
      }
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching todos:', error);
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
        throw new Error('Ошибка: ' + response.status);
      }
      const { data } = await response.json();
      return data;
    } catch (error) {
      console.error('Error adding todo:', error);
      throw error;
    }
  },
};

export default todoAPI;
