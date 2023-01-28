import './App.css';
import Login from './components/Login/Login';
import Product from './components/Product/Product';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import DetailProduct from './components/Product/DetailProduct';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Head from './components/Header/Head';

function App() {
  return (
    <>
    <div className='app'>
    <Router>  
      <Header />
      {/* <Head /> */}
      <Routes>
        <Route exact path='/' element={<Product/>} /> 
        <Route exact path='/cart' element={<Cart/>} /> 
        <Route path='/login' element={<Login/>} />
        <Route path='/detail-product/:id' element={<DetailProduct/>} />
      </Routes>
    
    </Router>
    </div>

    </>
  );
}

export default App;
