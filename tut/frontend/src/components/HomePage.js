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
import CardView from "./CardView";
import AddNewNote from "./AddNewNote";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import  Box from "@mui/material/Box";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router >
        <Switch>
          <Route exact path="/">
            <CustomDrawer />
            <Box sx={{position: 'relative', left: '50%', top: '10%', transform: 'translate(-50%, -50%))'}}>
            <Grid2 container spacing={10}>
              <Grid2 xs={6}><CardView /></Grid2>
              <Grid2 xs={6}><AddNewNote />  </Grid2>           
            </Grid2>
            </Box>
          </Route>
          <Route path="/account" component={AccountPage} />
          <Route path="/create" component={CreateNotePage} />
          <Route path="/settings" component={SettingsSection}/>
        </Switch>
      </Router>
    );
  }
}
