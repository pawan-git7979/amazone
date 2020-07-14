import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';
import {BrowserRouter , Route , Link} from 'react-router-dom'; 
import HomeScreen from './screens/HomeScreen' ;
import ProductScreen from './screens/ProductScreen' ;

function App() {
  const openMenu = ()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = ()=>{
      document.querySelector(".sidebar").classList.remove("open");
  }
  return (

   <BrowserRouter>

    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button type="button" onClick={openMenu}>
            &#9776;
          </button>
          <Link to="/">Amazone</Link>
        </div>
        <div className="header-links">
          <a  class="cart" href="cart.html">cart</a>
          <a href="Signin.html">Sign in</a>
        </div>
      </header>

      <aside className="sidebar">
          <h3>shopping category</h3>
          <button className="sidebar-close-button" type="button" onClick={closeMenu}>X</button>
          <ul>
            <li>
              <a href="index.html">shirts</a>
            </li>
            <li>
              <a href="index.html">pants</a>
            </li>
          </ul>
      </aside>
      <main className="main">
        <div className="content">
          <Route path="/products/:id" component={ProductScreen} />
          <Route path="/" exact={true}  component={HomeScreen} />  
         
        </div>

      </main>
      <footer className="footer">
         All Right Reserved 2020 @ amazone.
      </footer>
    </div>
</BrowserRouter>
  );
}

export default App;
