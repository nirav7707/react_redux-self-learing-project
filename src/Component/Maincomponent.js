import React, { Component } from "react";

import Header from "./HeaderComponent";
import Menu from "./menuComponent";
import Projection from "./dataprojection";

import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contectus from "./contectus";
import About from "./aboutus";
import { Switch, Route, Redirect,withRouter } from "react-router-dom";
import {connect} from 'react-redux';

const mapStateToProps=(state)=>{
    return {
      dishes:state.dishes,
      comments:state.comments,
      leaders:state.leaders,
      promotions:state.promotions
    }
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
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
          dish={this.props.dishes.filter(dish => dish.featured)[0]}
          promotion={this.props.promotions.filter(promo => promo.featured)[0]}
          leader={this.props.leaders.filter(leader => leader.featured)[0]}
        />
      );
    };

    const Aboutas = () => {
      return <About leaders={this.props.leaders} />;
    };

    const dishwithId = ({ match }) => {
      return (
        <Projection
          dish={
            this.props.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
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
                  dishes={this.props.dishes}
                  onClick={dishId => this.onDishselect(dishId)}
                />
              )}
            />
            <Route path="/menu/:dishId" component={dishwithId} />
            <Route path="/contectus" component={Contectus} />
            <Route path="/aboutus" component={Aboutas} />
            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
