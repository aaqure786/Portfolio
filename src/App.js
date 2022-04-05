
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './Componet/Layout';
import Home from './Componet/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} ></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
