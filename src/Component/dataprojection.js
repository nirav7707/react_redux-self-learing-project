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
class Projection extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>
                  <b>{dish.name}</b>
                </CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 ml-3">
            <h3>Comments</h3>
            {this.props.dish.comments.map(comment => {
              return (
                <div key={comment.id}>
                  <div>{comment.comment}</div>
                  <div>
                    <span>--</span>
                    {comment.author},{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit"
                    }).format(new Date(Date.parse(comment.date)))}
                    <hr />
                    <br />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderDish(this.props.dish)}</div>
      </div>
    );
  }
}

export default Projection;
