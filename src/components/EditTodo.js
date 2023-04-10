import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditTodo() {
  const { todoId } = useParams();

  const [id, setId] = useState('');

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const [dueDate, setDueDate] = useState('');

  const [validation, setValue] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3002/todo/' + todoId)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setId(resp.id);
        setTitle(resp.title);
        setDescription(resp.description);
        setDueDate(resp.dueDate);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  function handleSubmit(e) {
    e.preventDefault();
    const todoData = { id, title, description, dueDate };

    fetch('http://localhost:3002/todo/' + todoId, {
      method: 'PUT',
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
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Edit Todo</h2>

        <label className="hidden">ID</label>
        <input value={id} disabled="disabled"></input>

        <input
          required
          value={title}
          placeholder="title"
          onMouseDown={(e) => setValue(true)}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        {title.length === 0 && validation && <span>Invalid title</span>}

        <input
          value={description}
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        ></input>

        <input
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        ></input>

        <button type="submit">Save</button>
        <Link to="/">Back</Link>
      </form>
    </div>
  );
}
