import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Modal } from "reactstrap";
import "./ReactStrap.css";

class Reactstrap extends React.Component {
  state = {
    modalVisible: false,
  };

  openModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };
  render() {
    const { modalVisible } = this.state;
    return (
      <div className="col-md-12 mt-5">
        <button className="btn btn-info" onClick={this.openModal}>
          Modal Open
        </button>
        <modal>
          {modalVisible ? (
            <Form>
              <FormGroup>
                <div className=" col-md-5 justify-content-center">
                  <Label for="checked">Email</Label>
                  <Input
                    id="checked"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                    className="inputCheck"
                  />
                  <p className="paragrifLeftt mt-2">
                    Pleace enter your first and lastName. (Requarid)
                  </p>
                </div>
              </FormGroup>
              <FormGroup>
                <div className="col-md-5 justify-content-center">
                  <Label for="passwordInput">Password</Label>
                  <Input
                    id="passwordInput"
                    name="password"
                    placeholder="password placeholder"
                    type="password"
                    className="inputCheck"
                  />
                </div>
              </FormGroup>
              <div className="mt-5">
                <h5 className="col-md-5">Hobbies</h5>
                <Form className="col-md-5">
                  <FormGroup check inline>
                    <Input type="checkbox" />
                    <Label check>Surfing</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="checkbox" />
                    <Label check>Running</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="checkbox" />
                    <Label check>Bilking</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="checkbox" />
                    <Label check>Padding</Label>
                  </FormGroup>
                  <p className="paragrifLeft mt-2">
                    Check zero or more hobbies. (optional)
                  </p>
                </Form>
              </div>

              <div className="mt-5">
                <h5 className="col-md-5">Level</h5>
                <Form className="col-md-5">
                  <FormGroup check inline>
                    <Input type="radio" />
                    <Label check>Freshman</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="radio" />
                    <Label check>Sophomore</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="radio" />
                    <Label check>Junior</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="radio" />
                    <Label check>Senior</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input type="radio" />
                    <Label check>Other</Label>
                  </FormGroup>
                  <p className="paragrifLefts mt-2">
                    Select your grade lavel. (Requarid)
                  </p>
                </Form>
              </div>

              <div className="wrapperMini">
                <div className="col-md-5 mt-5">
                  <FormGroup>
                    <Label for="selectValue">GPA</Label>
                    <Input id="selectValue" type="select" name="select">
                      <option>Place select a value</option>
                      <option>Junior</option>
                      <option>Middil</option>
                      <option>Senior</option>
                      <option>More</option>
                    </Input>
                  </FormGroup>
                </div>
                <div className="col-md-5 mt-5">
                  <FormGroup>
                    <Label for="selectMulti">Select Multi</Label>
                    <Input
                      id="selectMulti"
                      multiple
                      name="selectMulti"
                      type="select"
                    >
                      <option>Phusics</option>
                      <option>Chemistry</option>
                      <option>Mathematics</option>
                      <option>Biology</option>
                    </Input>
                  </FormGroup>
                  <p className="multiSelect">
                    Select zero or more majors. (optional)
                  </p>
                </div>
              </div>
              <div className="buttons col-md-2 mb-5">
                <button className="btn btn-success mx-2">Save</button>
                <button className="btn btn-danger">Cancel</button>
              </div>
            </Form>
          ) : (
            ""
          )}
        </modal>
      </div>
    );
  }
}

export default Reactstrap;
