import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/common/Products/Products";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
    return (
        <GlobalProvider>
            <Navbar />
            <main className="flex">
                <Sidebar className="sidebar" />
                <Products className="products" />
            </main>
        </GlobalProvider>
    );
}

export default App;
