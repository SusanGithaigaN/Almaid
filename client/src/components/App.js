// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='about' element={<About />} />
        <Route exact path='login' element={<Login />} />
        <Route exact path='signup' element={<Signup />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
