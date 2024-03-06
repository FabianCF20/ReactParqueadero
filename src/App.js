import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/Home';
import LoginForm from './component/Login';
import RecordForm from './component/Record';

function App() {
  return (
    <Routes> 
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/record" element={<RecordForm />} />
    </Routes>
  );
}

export default App;