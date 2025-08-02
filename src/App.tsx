import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoListPage from './pages/TodoListPage.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
