// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
