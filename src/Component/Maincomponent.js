import React, { Component } from "react";

import Header from "./HeaderComponent";
import Menu from "./menuComponent";
import Projection from "./dataprojection";
import { DISHES } from "./deshes";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishselect(dishId) {
    this.setState({
      selectedDish: dishId
    });
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route
              exact
              path="/menu"
              component={() => (
                <Menu
                  dishes={this.state.dishes}
                  onClick={dishId => this.onDishselect(dishId)}
                />
              )}
            />
            <Redirect to="/home" />
          </Switch>

          <Projection
            dish={
              this.state.dishes.filter(
                dish => dish.id === this.state.selectedDish
              )[0]
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
