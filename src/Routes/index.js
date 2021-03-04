import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Routes";

import Login from "../Pages/Login";
import Profile from "../Pages/Profile";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} isPrivite={false} />
      <Route path="/profile" exact component={Profile} isPrivite />
    </Switch>
  );
}

export default Routes;
