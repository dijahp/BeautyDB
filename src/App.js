import React, { Component } from "react";
import Results from "./components/Results";
import Card from "./components/Card";
import logo from "./logo.svg";
import "./App.css";

const brands = [
  "almay",
  "alva",
  "anna sui",
  "annabelle",
  "benefit",
  "boosh",
  "burt's bees",
  "butter london",
  "c'est moi",
  "cargo cosmetics",
  "china glaze",
  "clinique",
  "colourpop",
  "covergirl",
  "deciem",
  "dior",
  "e.l.f.",
  "essie",
  "fenty",
  "glossier",
  "iman",
  "l'oreal",
  "maybelline",
  "smashbox",
  "stila",
  "revlon",
  "nyx",
];

class App extends Component {
  state = {
    render: "Home",
    results: null,
    brand: false,
  };
  // Handles Card choices
  onButtonClick = (choice, brand) => {
    console.log(choice);
    this.setState({ render: choice, brand: brand });
  };

  // Handles Brand or Category choice and displays results
  handleResults = (pick) => {
    console.log(pick);
    this.setState({ results: pick, render: "Results" });
  };

  handleDisplay = () => {
    switch (this.state.render) {
      case "Home":
        return (
          <div className="categoryBrand">
            <Card title="Category" click={this.onButtonClick} brand={false} />
            <Card title="Brand" click={this.onButtonClick} brand={true} />
          </div>
        );
      case "Category":
        return (
          <div className="categories">
            <Card title="Lipstick" click={this.handleResults} />
            <Card title="Foundation" click={this.handleResults} />
            <Card title="Concealer" click={this.handleResults} />
            <Card title="Eyeshadow" click={this.handleResults} />
            <Card title="Mascara" click={this.handleResults} />
            <Card title="Eyebrow" click={this.handleResults} />
            <Card title="Nail polish" click={this.handleResults} />
          </div>
        );
      case "Brand":
        return (
          <div className="brand">
            {brands.map((brand, index) => {
              return (
                <Card key={index} title={brand} click={this.handleResults} />
              );
            })}
          </div>
        );
      case "Results":
        return (
          <div className="resultsMain">
            <Results state={this.state} results={this.state.results} />
          </div>
        );
    }
  };
  render() {
    return (
      <div className="App">
        <h1>BeautyDB</h1>
        {this.handleDisplay()}
      </div>
    );
  }
}

export default App;
