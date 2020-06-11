import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div
        className="Card"
        onClick={() => this.props.click(this.props.title, this.props.brand)}
      >
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default Card;
