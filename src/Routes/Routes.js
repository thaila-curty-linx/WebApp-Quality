import React from "react";
import { Route as ReactDOMRoute, Redirect } from "react-router-dom";
import { useAuth } from "../Context/Auth";

const Routes = ({ isPrivite = false, component: Component, ...rest }) => {
  const { logged } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivite === logged ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivite ? "/" : "/profile" }} />
        );
      }}
    />
  );
};

export default Routes;
