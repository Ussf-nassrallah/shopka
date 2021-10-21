import { React, useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import Category from "../../Category/Category";
import "./Categories.scss";

export default function Catygories() {
  const { categories } = useContext(GlobalContext);
  const categoriesDiv = document.querySelector(".categories");

  const [mouseDown, setMouseDown] = useState(false);
  const [mouseEnter, setMouseEnter] = useState(false);
  const [mouseUp, setMouseUp] = useState(false);
  const [mouseMove, setMouseMove] = useState(false);

  let pressed = false;
  let startx;
  let x;

  function mouseDownEvent(e) {
    pressed = true;
    startx = e.nativeEvent.offsetX - categoriesDiv.offsetLeft;
    setMouseDown(true);
    // console.log(startx);
  }

  function mouseMoveEvent(e) {
    if (!pressed) return;
    e.preventDefault();
    x = e.nativeEvent.offsetX;
    // console.log(x - startx);
    setMouseMove(true);
  }

  window.addEventListener("mouseup", () => (pressed = false));

  return (
    <div
      className="container"
      onMouseDown={(e) => mouseDownEvent(e)}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseUp={() => setMouseUp(true)}
      onMouseMove={(e) => mouseMoveEvent(e)}
    >
      <div
        className="categories"
        style={
          ({ cursor: mouseDown ? "grabbing" : "default" },
          { cursor: mouseEnter ? "grab" : "default" },
          { cursor: mouseUp ? "grab" : "default" },
          { left: mouseMove ? `${x - startx}px` : "100px" })
        }
      >
        {categories.map((category) => (
          <Category
            key={category.id}
            iconSrc={category.iconSrc}
            name={category.name}
          />
        ))}
      </div>
    </div>
  );
}
