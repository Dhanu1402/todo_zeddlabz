import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateTodo() {
  const [id] = useState('');

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const [dueDate, setDueDate] = useState('');

  const [validation, setValue] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const todoData = { title, description, dueDate };

    fetch('http://localhost:3002/todo', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(todoData),
    })
      .then((res) => {
        alert('Saved successfully.');
        navigate('/');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form onSubmit={handleSubmit} className="w-64 mx-auto mb-12">
        <h2 className="text-xl text-center text-gray-400">Add a new todo</h2>

        <label className="hidden">ID</label>
        <input value={id} disabled="disabled"></input>

        <input
          required
          value={title}
          placeholder="title"
          onMouseDown={(e) => setValue(true)}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full rounded-md p-2 mb-2 border"
        ></input>
        {title.length === 0 && validation && <span>Invalid title</span>}

        <input
          value={description}
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full rounded-md p-2 mb-2 border"
        ></input>

        <h6 className="text-sm text-gray-400">Due Date : </h6>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="block w-full rounded-md p-2 mb-2 border text-gray-400"
        ></input>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-Blue text-white text-center block w-full rounded-md p-2"
          >
            Save
          </button>
          <Link
            to="/"
            className="bg-Blue text-white text-center block w-full rounded-md p-2"
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
