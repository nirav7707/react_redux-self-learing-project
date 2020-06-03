import React, { Component } from "react";

import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./menuComponent";
import Projection from "./dataprojection";
import { DISHES } from "./deshes";
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
    return (
      <div>
        <Navbar dark color="danger">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
          <Menu
            dishes={this.state.dishes}
            onClick={dishId => this.onDishselect(dishId)}
          />
          <Projection
            dish={
              this.state.dishes.filter(
                dish => dish.id === this.state.selectedDish
              )[0]
            }
          />
        </div>
      </div>
    );
  }
}

export default Main;
