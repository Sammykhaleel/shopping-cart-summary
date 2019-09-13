import React, { Component } from "react";
import { Button, Collapse, Well, Media, Row, Col } from "react-bootstrap";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide`} item details
          {this.state.open === false ? `+` : `-`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img
                    width={100}
                    height={100}
                    alt="thumbnail"
                    src="https://i5.walmartimages.com/asr/58f40ef2-41ef-4290-b393-920f63da60ba_1.2b51c944c164d2a5e242e628dd402a9b.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                  />
                </Media.Left>
                <Media.Body>
                  <p>
                    Essentials by OFM ESS-3083 Racing Style Gaming Chair,
                    Multiple Colors
                  </p>
                  <Row className="show-grid"></Row>
                  <Col md={6}>
                    <strong>{`$${this.props.price}`}</strong>
                    <br />
                    <strong className="price-strike">{`$${this.props.price}`}</strong>
                  </Col>
                  <Col md={6}>Qty: 1</Col>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
