import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import './App.css';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" index element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </>
  );
}

export default App;
