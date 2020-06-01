import React, { Component } from "react";
import { render } from "react-dom";
import {
  Media,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardBody,
  CardText,
  Card
} from "reactstrap";
import Projection from "./dataprojection";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
  }

  onDishselect(dish) {
    this.setState({
      selectedDish: dish
    });
  }

  render() {
    console.log(this.state.selectedDish);

    const menu = this.props.dishes.map(dish => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1 ">
          <Card onClick={() => this.onDishselect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div clasName="container">
        <div className="row">{menu}</div>
        <Projection dish={this.state.selectedDish} />
      </div>
    );
  }
}

export default Menu;
