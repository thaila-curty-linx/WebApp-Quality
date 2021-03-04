import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./Context";
import Routes from "./Routes";

const App = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
  </BrowserRouter>
);

export default App;
