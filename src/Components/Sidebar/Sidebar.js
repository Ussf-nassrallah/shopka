import { React, useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import SidebarCategory from "./SidebarCategory";
import "./Sidebar.scss";

const Sidebar = ({ sidebar, setSidebar }) => {
    const { categories } = useContext(GlobalContext);
    const [fixed, setFixed] = useState(false);

    const fixedSidebar = () =>
        window.scrollY >= 90 ? setFixed(true) : setFixed(false);
    window.addEventListener("scroll", fixedSidebar);

    let closeSidebar = sidebar ? "close" : "";
    let fixSidebar = fixed ? "fixed" : "";

    return (
        <div className={`sidebar ${closeSidebar} ${fixSidebar}`}>
            <button className="sidebar__btn btn btn-secondary">
                <RiBarChartHorizontalFill className="icon" />
                departments
            </button>

            <MdClose
                className="closeIcon hide-for-desktop"
                onClick={() => setSidebar(!sidebar)}
            />

            <div className="sidebar__menu">
                <ul>
                    {categories.map((category) => (
                        <SidebarCategory
                            key={category.id}
                            name={category.name}
                            subCategory={
                                category.subCategory ? category.subCategory : []
                            }
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
