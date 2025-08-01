export interface Todo {
  id: number;
  title: string;
  createdAt: string;
  isDone: boolean;
}

export interface NewTodo {
  isDone: boolean;
  title: string;
}
