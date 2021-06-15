import React from "react";

const SmallCard = (props) => {
  const { bg, title, detail, buttonText } = props.data;
  console.log(props);
  const style = {
    backgroundImage: `url("${bg}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "220px",
    width: "100%",
    margin: "0 auto",
    borderRadius: "10px",
    padding: "2rem",
  };
  return (
    <div className="col-12 col-md-6 my-2">
      <div style={style}>
        <div className="w-60">
          <h1>{title}</h1>
          <p>{detail}</p>
          <button className="btn btn-outline-primary">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
