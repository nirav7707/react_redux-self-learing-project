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

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div />;
    }
  }

  render() {
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
        <div clasName="row">{menu}</div>
        <div className="row">{this.renderDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}

export default Menu;
