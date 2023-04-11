import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.scss";
import Home from './pages/Home';
import Confirmation from './pages/Confirmation'

function App() {
  return <>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/active-form" element={<Navigate to='/'/>}/>
      <Route path="/done" element={<Confirmation/>}/>
    </Routes>
  </Router>
  </>
}

export default App;
