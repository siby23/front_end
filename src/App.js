import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login_Form from './components/Login_Form';
function App() {
  return (

    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login_Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
