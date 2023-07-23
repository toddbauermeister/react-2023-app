import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/layout';
import Home from './components/pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/Signup/SignUp';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignIn />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
  );
}

export default App;
