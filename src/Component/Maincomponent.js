import React, { Component } from "react";

import Header from "./HeaderComponent";
import Menu from "./menuComponent";
import Projection from "./dataprojection";
import { DISHES } from "./deshes";
import { COMMENTS } from "./comments";
import { LEADERS } from "./Leaders";
import { PROMOTIONS } from "./promotion";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contectus from "./contectus";
import { Switch, Route, Redirect } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
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
      return (
        <Home
          dish={this.state.dishes.filter(dish => dish.featured)[0]}
          promotion={this.state.promotions.filter(promo => promo.featured)[0]}
          leader={this.state.leaders.filter(leader => leader.featured)[0]}
        />
      );
    };

    const dishwithId = ({ match }) => {
      return (
        <Projection
          dish={
            this.state.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
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
            <Route path="/menu/:dishId" component={dishwithId} />
            <Route path="/contectus" component={Contectus} />
            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
