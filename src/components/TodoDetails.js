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
    <div>
      <div>
        {todo && (
          <div>
            <h2>{todo.title}</h2>
            <h5>{todo.description}</h5>
            <h5>Due_Date : {todo.dueDate}</h5>
            <Link to="/">Back to home</Link>
          </div>
        )}
      </div>
    </div>
  );
}
