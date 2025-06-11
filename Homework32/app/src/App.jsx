import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Departments from './pages/Departments';
import Button from 'react-bootstrap/Button';

function App() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('isAuth');
    if (auth === 'true') {
      setIsAuth(true);
    }
  }, []);

  const handleLogin = () => {
    if (login === 'admin' && password === 'admin') {
      setIsAuth(true);
      localStorage.setItem('isAuth', 'true');
    } else {
      alert('Неверный логин или пароль');
    }
  };

  return (
    <BrowserRouter>
      {isAuth ? (
        <>
          <div className="content">
            <div className='btnWrapper'>
              <Button
                variant="danger"
                onClick={() => {
                  setIsAuth(false);
                  localStorage.removeItem('isAuth');
                }}
              >
                Выйти
              </Button>
            </div>
            <nav>
              <Link to="/">Home</Link> |{" "}
              <Link to="/employees">Employees</Link> |{" "}
              <Link to="/departments">Departments</Link>
            </nav>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/departments' element={<Departments />} />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <div className='wrapper'>
            <input
              type='text'
              placeholder='login'
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button varint='sucsess' type='button' onClick={handleLogin}>
            login
            </Button>
          </div>
          
        </>
      )}
    </BrowserRouter>
  );
}

export default App;

