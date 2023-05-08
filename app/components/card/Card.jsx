import React from "react";
import "./Card.css";
import { BiTimeFive } from "react-icons/bi";
import { IoStarSharp, IoAdd } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

const Card = ({ image, title }) => {
  return (
    <div className="recipe-card">
      <div className="top">
        <div className="image">
          <img src={image} alt={title} />
          <MdFavoriteBorder />
        </div>
      </div>
      <div className="bottom">
        <div className="title-star">
          <h4>{title.slice(0, 50)}</h4>
          <div className="star">
            <span>
              <IoStarSharp />
            </span>
            <p>4.5</p>
          </div>
        </div>
        <div className="food_info">
          <div className="time">
            <BiTimeFive />
            <p>30 min</p>
          </div>
          <div className="calories">
            <p>450 Kcal</p>
          </div>
        </div>
        <div className="price-add">
          <p>50 DH</p>
          <button>
            Add <IoAdd />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
