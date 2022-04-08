
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './Componet/Layout';
import Home from './Componet/Home';
import About from './Componet/About';
import Contact from './Componet/contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} ></Route>
        <Route path='about' element={<About/>} ></Route>
        <Route path='contact' element={<Contact/>} ></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
