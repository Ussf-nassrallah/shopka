import React, { useState, useEffect, useContext } from "react";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/common/Products/Products";
import Sidebar from "./Components/Sidebar/Sidebar";
import FilterProducts from "./Components/common/FilterProducts/FilterProducts";
import Catygories from "./Components/common/Categories/Categories";

function App() {
    const [sidebar, setSidebar] = useState(true);
    const { products } = useContext(GlobalContext);
    const [select, setSelect] = useState("all");
    let [list, setList] = useState([]);

    const filterItems = (category) =>
        products.filter((product) => product.category === category);

    return (
        <GlobalProvider>
            <Navbar sidebar={sidebar} setSidebar={setSidebar} />
            <Catygories />

            <main className="flex">
                <div className="container">
                    <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

                    <div
                        className={
                            sidebar
                                ? "sidebar__overlay hide-overlay"
                                : "sidebar__overlay"
                        }
                    ></div>

                    <div className="right-side">
                        <FilterProducts
                            filterProducts={filterItems}
                            select={select}
                            setSelect={setSelect}
                        />
                        <Products
                            className="products"
                            list={list}
                            setList={setList}
                            select={select}
                            setSelect={setSelect}
                            filterItems={filterItems}
                        />
                    </div>
                </div>
            </main>
        </GlobalProvider>
    );
}

export default App;
