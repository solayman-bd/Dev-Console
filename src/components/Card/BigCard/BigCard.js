import React from "react";
import cardImage1 from "../../../img/CardImage/card img (1).png";
import "./BigCard.css";
const BigCard = () => {
  return (
    <section className="row big-card-bg rounded py-md-0 py-2">
      <div className="col-12 col-md-6  card-image ">
        <img src={cardImage1} className="img-fluid mx-sm-auto" alt="" />
      </div>
      <div className="col-12 col-md-6 ">
        <div className="w-80 mx-auto pt-4  ">
          <h2 className="">JioGlass Developer</h2>
          <h2 className="">Dashboard</h2>
          <p className="">
            Build AR and VR application for the next billion internet users.
          </p>
          <div className="text-center ">
            <button className="big-card-button mt-1">Enter</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigCard;
