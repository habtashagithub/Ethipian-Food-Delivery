import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>List Our Menu</h1>
      <p className="explore-menu-text">
        Welcome to the rich and flavorful world of Ethiopian cuisine! Known for
        its bold spices, shared platters, and unique dining experiences,
        Ethiopian food reflects the heart and soul of its people and traditions.
        Enjoy our carefully crafted dishes that offer a true taste of Ethiopia,
        all served with warm hospitality.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_image ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
