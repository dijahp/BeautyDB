import React, { Component } from "react";
import Card from "../components/Card";
import "../Assets/Results.css";

class Result extends Component {
  render() {
    let { name, price, rating, image_link } = this.props.productInfo;
    return (
      <div className="Result">
        <img src={image_link} alt="" />
        <h3>{name}</h3>
        <p>${price}</p>
        <p>{rating}</p>
      </div>
    );
  }
}

export default Result;
