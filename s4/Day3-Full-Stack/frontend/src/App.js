// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Notes } from './components/Notes';
import { CreateNotes } from './components/CreateNotes';

function App() {
  return (
    <div className="App">
      <h1>NOtes App</h1>
      <header>
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/notes"}>Notes</Link>
        <Link to={"/addnotes"}>Create Notes</Link>
      </header>
      <div>
        <Routes>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/notes' element={<Notes />}></Route>
          <Route path='/addnotes' element={<CreateNotes />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
