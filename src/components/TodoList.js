import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function TodoList() {
  const [todo, setTodo] = useState(null);

  const navigate = useNavigate();

  function detail(id) {
    navigate('/todo/detail/' + id);
  }

  function edit(id) {
    navigate('/todo/edit/' + id);
  }

  function Delete(id) {
    if (window.confirm('Do you want to remove?')) {
      fetch('http://localhost:3002/todo/' + id, {
        method: 'DELETE',
      })
        .then((res) => {
          alert('Removed successfully.');
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }

  useEffect(() => {
    fetch('http://localhost:3002/todo')
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setTodo(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto p-10">
      <div className="flex justify-between">
        <h2>Worried of missing something ?</h2>
        <Link to="todo/create">Add Todo</Link>
      </div>
      <div className="">
        {todo &&
          todo.map((item) => (
            <div key={item.id} className="flex items-center">
              <div className="flex gap-4">
                <p>{item.title}</p>
                <p>{item.dueDate}</p>
              </div>
              <div className="">
                <button
                  onClick={() => {
                    edit(item.id);
                  }}
                  className="p-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    Delete(item.id);
                  }}
                  className="p-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    detail(item.id);
                  }}
                  className="p-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
