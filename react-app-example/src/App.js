import React from 'react';

import './App.css';

import {
    Route,
    useParams,
    Routes,
    BrowserRouter
  } from "react-router-dom";
  
  import NavBar from './components/NavBar';
  import HomeScreen from './screens/HomeScreen';
  import ProductsScreen from './screens/ProductsScreen';
  import NoScreen from './screens/NoScreen';
  import FooterBar from './components/FooterBar';
  import SingleProductScreen from './screens/SingleProductScreen';


function App() {
    return(
        <div>
                <NavBar/>
                <BrowserRouter>
                  <Routes>
                    <Route exact path="/" element={<HomeScreen/>}/>
                    <Route path="/products" element={<ProductsScreen/>}/>
                    <Route path="/products/:productId" element={<SingleProductScreen/>}/>
                    <Route path="*" element={<NoScreen/>}/>
                  </Routes>
                </BrowserRouter>
                <h1>Hello React!</h1>
            </div>
    )
}
export default App;