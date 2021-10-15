import { React, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { RiBarChartHorizontalFill } from 'react-icons/ri';
import SidebarCategory from './SidebarCategory';
import './Sidebar.scss';

const Sidebar = () => {
  const { categories } = useContext(GlobalContext);
  return (
    <div className="sidebar">
      <button className="sidebar__btn btn btn-secondary">
        <RiBarChartHorizontalFill  className="icon" />
        departments
      </button>

      <div className="sidebar__menu">
        <ul>
          {
            categories.map(category => <SidebarCategory 
              key={category.id}
              name={category.name}
              subCategory = {category.subCategory ? category.subCategory : []}
            />)
          }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;