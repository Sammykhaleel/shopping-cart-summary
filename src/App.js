// import React from "react";
import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import SubTotal from "./components/Subtotal/Subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PromoCode from "./components/PromoCode/PromoCode";

import "./App.css";
// import { directive } from "@babel/types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      EstimatedTotal: 0
    };
  }
  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
          <SubTotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <EstimatedTotal price={this.state.EstimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.EstimatedTotal.toFixed(2)} />
          <PromoCode price={this.state.EstimatedTotal.toFixed(2)} />
          <hr />
          <hr />
        </Grid>
      </div>
    );
  }
}

export default App;
