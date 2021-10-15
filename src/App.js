import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/common/Products/Products";
import Sidebar from "./Components/Sidebar/Sidebar";
import FilterProducts from "./Components/common/FilterProducts/FilterProducts";
import Catygories from './Components/common/Categories/Categories';

function App() {
    return (
        <GlobalProvider>
            <Navbar />
            <Catygories />
            <main className="flex">
                <div className="container">
                    <Sidebar className="sidebar" />
                    <div className="right-side">
                        <FilterProducts />
                        <Products className="products" />
                    </div>
                </div>
            </main>
        </GlobalProvider>
    );
}

export default App;
