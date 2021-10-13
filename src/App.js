import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/common/Products/Products";
import Sidebar from "./Components/Sidebar/Sidebar";
import FilterProducts from "./Components/common/FilterProducts/FilterProducts";

function App() {
    return (
        <GlobalProvider>
            <Navbar />
            <main className="flex">
                <Sidebar className="sidebar" />
                <div>
                    <FilterProducts />
                    <Products className="products" />
                </div>
            </main>
        </GlobalProvider>
    );
}

export default App;
