import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function TodoDetail() {
  const { todoId } = useParams();

  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch('http://localhost:3002/todo/' + todoId)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setTodo(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <div className="w-64 mx-auto mb-12">
        {todo && (
          <div>
            <h6 className="text-sm text-gray-400">Title : </h6>
            <h2 className="block w-full rounded-md p-2 mb-2 border text-gray-500 font-semibold">
              {todo.title}
            </h2>
            <h6 className="text-sm text-gray-400">Description : </h6>
            <h5 className="block w-full rounded-md p-2 mb-2 border text-gray-500 font-semibold">
              {todo.description}
            </h5>
            <h6 className="text-sm text-gray-400">Due Date : </h6>
            <h5 className="block w-full rounded-md p-2 mb-2 border text-gray-500 font-semibold">
              {todo.dueDate}
            </h5>
            <Link
              to="/"
              className="bg-Blue text-white text-center block w-full rounded-md p-2"
            >
              Back to home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
