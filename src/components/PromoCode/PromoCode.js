import React, { Component } from "react";
import {
  Button,
  Collapse,
  Col,
  Row,
  Well,
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
export default class PromoCode extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, value: "" };
  }
  render() {
    return (
      <div>
        <Button
          className="promo-code-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `Apply ` : `Hide `}
          promo code
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse>
          <div>
            <Well>
              <Row className="show-grid">
                <Col md={12}>
                  <Form>
                    <FormGroup controlId="formInlineName">
                      <ControlLabel>Promo Code</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Enter promo code"
                        value={this.props.promoCode}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                    <Button
                      block
                      bsStyle="sucess"
                      className="btn-round"
                      disabled={this.props.isDisabled}
                      onClick={this.props.giveDiscount}
                    >
                      Apply
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
