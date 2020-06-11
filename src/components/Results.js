import React, { Component } from "react";
import Result from "./Result";
import axios from "axios";

class Results extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    const newResults = this.props.state.results.toLowerCase();
    {
      this.props.state.brand
        ? axios
            .get(
              `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${newResults}`
            )
            .then((res) => this.setState({ products: res.data }))
        : axios
            .get(
              `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${newResults}`
            )
            .then((res) => this.setState({ products: res.data }));
    }
  }
  render() {
    console.log(this.props.state);
    return (
      <div className="Results">
        <h3>Makeup Products</h3>
        <div className="Result-items">
          {this.state.products.map((product, index) => {
            return <Result key={index} productInfo={product} />;
          })}
        </div>
      </div>
    );
  }
}

export default Results;
