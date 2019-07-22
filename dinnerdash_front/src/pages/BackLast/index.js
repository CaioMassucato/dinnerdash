import React, { Component } from "react";
import LastOrder from "../../components/LastOrder";
import MealCard from "../../components/MealCard";
import { api } from "../../api";
import "./style.css";

export default class BackLast extends Component {
  state = {
    meals: []
  };

  componentDidMount() {
    api.get("/meal").then(response => {
      this.setState({ meals: response.data });
    });
  }
  render() {
    return (
      <>
        <LastOrder />
        <div className="cards">
          {this.state.meals.map(meal => (
            <MealCard
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </div>
      </>
    );
  }
}
