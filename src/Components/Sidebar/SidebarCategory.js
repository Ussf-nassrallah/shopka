import React, { useState } from 'react';
import { RiArrowRightSLine, RiArrowDownSLine } from 'react-icons/ri';

const SidebarCategory = ({ name, subCategory }) => {
  const [Arrow, setArrow] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const toggleCategory = () => {
    setArrow(!Arrow);
    setShowCategory(!showCategory);
  }

  const arrowHandeler = (array, arrow) => {
    if (array.length > 0 && arrow){
      return <RiArrowDownSLine className="arrowIcon" />
    } else if(array.length === 0) {
      return <RiArrowRightSLine className="arrowIcon hide" />
    } else if(array.length > 0 && !arrow){
      return <RiArrowRightSLine className="arrowIcon" />
    }
  }


  return (
    <li className="sc" onClick={toggleCategory} >
      <p className="sc__name">
        {name}
      </p>
      {arrowHandeler(subCategory, Arrow)}
      <ul className={showCategory ? "subCategory show" : "subCategory hide"}>
        {
          subCategory.map((ele, index) => <li
            key={index}
            className="subCategory__item">
              {ele.name}
          </li>)
        }
      </ul>
    </li>
  )
}

export default SidebarCategory;