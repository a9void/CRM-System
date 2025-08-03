import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoListPage from './pages/TodoListPage.tsx';
import AuthLayout from './layout/AuthLayout';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />} />
        {/*  <Route path="/" element={<TodoListPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
