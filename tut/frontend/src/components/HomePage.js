import React, { Component } from "react";
import AccountPage from "./AccountPage";
import CreateNotePage from "./CreateNotePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import CustomDrawer from "./CustomDrawer"
import SettingsSection from "./SettingsSection";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <CustomDrawer />
          </Route>
          <Route path="/account" component={AccountPage} />
          <Route path="/create" component={CreateNotePage} />
          <Route path="/settings" component={SettingsSection}/>
        </Switch>
      </Router>
    );
  }
}
