import React from "react";
import cardData from "../../FakeData/CardData";
import BigCard from "../Card/BigCard/BigCard";
import SmallCard from "../Card/SmallCard/SmallCard";
import "./HomePageContainer.css";

const HomePageContainer = () => {
  return (
    <section className="homepage-container w-60 mx-auto mb-5 pb-2">
      <div className="mt-5">
        <BigCard />
      </div>
      <div className="mt-5 row">
        {cardData.map((data) => (
          <SmallCard data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default HomePageContainer;
