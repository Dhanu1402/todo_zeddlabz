import { Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';
import TodoDetail from './components/TodoDetails';
import EditTodo from './components/EditTodo';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoList />}></Route>
      <Route path="/todo/create" element={<CreateTodo />}></Route>

      <Route path="/todo/detail/:todoId" element={<TodoDetail />}></Route>
      <Route path="/todo/edit/:todoId" element={<EditTodo />}></Route>
    </Routes>
  );
}
