import React, { Component } from "react";
import Map from "../Container/mapApi/MapApi";
//import test from "../Container/mapApi/test";
class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='' style={{ display: "flex", margin: "auto" }}>
        <div style={{}}>
          <Map />
        </div>
      </div>
    );
  }
}

export default MapPage;
