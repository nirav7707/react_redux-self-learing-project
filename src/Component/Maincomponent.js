import React, { Component } from "react";

import Header from "./HeaderComponent";
import Menu from "./menuComponent";
import Projection from "./dataprojection";
import { actions } from "react-redux-form";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contectus from "./contectus";
import About from "./aboutus";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  addComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders
} from "../redux/ActionCreators";

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions
  };
};

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  }
});

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
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          promotion={
            this.props.promotions.promotions.filter(promo => promo.featured)[0]
          }
          leader={
            this.props.leaders.leaders.filter(leader => leader.featured)[0]
          }
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leadersLoading={this.props.leaders.isLoading}
          leadersErrMess={this.props.leaders.errMess}
        />
      );
    };

    const Aboutas = () => {
      return <About leaders={this.props.leaders.leaders} />;
    };

    const dishwithId = ({ match }) => {
      return (
        <Projection
          dish={
            this.props.dishes.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
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
            <Route
              path="/contectus"
              component={() => (
                <Contectus resetFeedbackForm={this.props.resetFeedbackForm} />
              )}
            />
            <Route path="/aboutus" component={Aboutas} />

            <Redirect to="/home" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
