import React, { useState, useEffect, useContext } from "react";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";

// Styles
import "./App.scss";

// Components
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/common/Products/Products";
import Sidebar from "./Components/Sidebar/Sidebar";
import FilterProducts from "./Components/common/FilterProducts/FilterProducts";
import FilterButtons from "./Components/common/FilterButtons/FilterButtons";
import Catygories from "./Components/common/Categories/Categories";
import OptionsList from "./Components/OptionsList/OptionsList";

function App() {
    const { products } = useContext(GlobalContext);
    const [sidebar, setSidebar] = useState(true);
    const [select, setSelect] = useState("all");
    let [list, setList] = useState([]);
    const [value, setValue] = useState(false);

    // filter products
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

                        <div className="flex">
                            <FilterButtons />
                            <OptionsList value={value} setValue={setValue} />
                        </div>

                        <Products
                            list={list}
                            setList={setList}
                            select={select}
                            setSelect={setSelect}
                            filterItems={filterItems}
                            value={value}
                            setValue={setValue}
                        />
                    </div>
                </div>
            </main>
        </GlobalProvider>
    );
}

export default App;
