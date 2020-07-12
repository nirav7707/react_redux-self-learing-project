import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Col,
  Button,
  Tag,
  Row
} from "reactstrap";

import { Control, LocalForm, Errors } from "react-redux-form";

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
const CommentForm = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        submit comment
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>submit comment</ModalHeader>
        <ModalBody>
          <LocalForm
            onSubmit={values => {
              this.handleSubmit(values);
            }}
          >
            <Row className="form-group">
              <Label htmlFor="rating" md={2}>
                Rating
              </Label>
              <Col md={10}>
                <Control.select
                  model=".rating"
                  className="form-control"
                  type="select"
                  name="rating"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="Your Name" md={2}>
                Your Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".Your Name"
                  id="Your Name"
                  name="Your Name"
                  placeholder="Your Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15)
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".Your Name"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be 15 characters or less"
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="comment" md={2}>
                comment
              </Label>
              <Col md={10}>
                <Control.textarea
                  model=".comment"
                  name="comment"
                  placeholder="review"
                  className="form-control"
                  row="5"
                />
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CommentForm;
