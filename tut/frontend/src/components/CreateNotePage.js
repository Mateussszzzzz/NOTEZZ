import React, { Component } from "react";
import CustomDrawer from "./CustomDrawer";

export default class CreateRoomPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <>
      <p>This is the create note page</p>
      <CustomDrawer/>
      </>;
  }
}
