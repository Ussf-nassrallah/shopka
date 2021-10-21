import React, { useState } from "react";
import { GlobalProvider } from "./context/GlobalState";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/common/Products/Products";
import Sidebar from "./Components/Sidebar/Sidebar";
import FilterProducts from "./Components/common/FilterProducts/FilterProducts";
import Catygories from "./Components/common/Categories/Categories";

function App() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <GlobalProvider>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <Catygories />

      <main className="flex">
        <div className="container">
          <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

          <div
            className={
              sidebar ? "sidebar__overlay hide-overlay" : "sidebar__overlay"
            }
          ></div>

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
