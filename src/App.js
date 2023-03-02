import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/product-page" element={<ProductPage/>}/>
    </Routes>
    </>
  );
}

export default App;
