import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';

export default function App() {
  return (
    <Router>
      <Layout />
      <Home />
    </Router>
  );
}
