import React from "react";
import Proptypes from "prop-types";
import "./cards.css";
function Card({ title, imageSource }) {
  return (
    <div className="card text-center bg-dark mb-5 mt-5 animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="" className="card-img-top img-fluid" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          facilis obcaecati vitae. Labore dolorem nesciunt explicabo eos quia et
          impedit odit aperiam reprehenderit a. Quo, dicta. Perspiciatis impedit
          porro beatae?
        </p>
        <a href="#!" className="btn btn-outline-secondary rounded-0">
          Go to this website
        </a>
      </div>
    </div>
  );
}
Card.propTypes = {
  title: Proptypes.string.isRequired,
  imageSource: Proptypes.string,
};
export default Card;
