import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodo();
  }, []);

  async function loadTodo() {
    const result = await axios.get('http://localhost:3002/todos');
    console.log(result, 'asd');
  }

  return <div>Home</div>;
}
