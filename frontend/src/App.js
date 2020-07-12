import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';

function App() {
  const openMenu = ()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = ()=>{
      document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button type="button" onClick={openMenu}>
            &#9776;
          </button>
          <a href="index.html">Amazone</a>
        </div>
        <div className="header-links">
          <a href="cart.html">cart</a>
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
          <ul className="products">
            {
              data.products.map(product =>
                <li>
                  <div className="product">
                    <img className= " product-image" src={product.images} alt="product"></img>
                    <div className="product-name">
                         <a href="product.html"> {product.name}</a>
                    </div>
                    <div className="product-brand"> {product.brand}</div>
                    <div className="product-price"> ${product.price}</div>
                    <div className="product-rating"> {product.rating} stars {product.numReviews} reviews</div>
                  </div>
                </li>)
            }
          </ul>
        </div>

      </main>
      <footer className="footer">
         All Right Reserved 2020 @ amazone.
      </footer>
    </div>

  );
}

export default App;
