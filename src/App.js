import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Details from "./pages/Details";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    const WebFont = require("webfontloader");

    WebFont.load({
      google: {
        families: ["Erica One", "Open Sans:300,400,700"]
      }
    });

    this.keyboardFocus = this.keyboardFocus.bind(this);
    this.mouseFocus = this.mouseFocus.bind(this);

    document.addEventListener("keyup", this.keyboardFocus);
    document.addEventListener("mousedown", this.mouseFocus);
  }

  keyboardFocus(e) {
    if (this.app.contains(e.target)) {
      this.app.classList.add("app--has-focus");
    } else {
      this.app.classList.remove("app--has-focus");
    }
  }

  mouseFocus(e) {
    if (this.app.contains(e.target)) {
      this.app.classList.remove("app--has-focus");
    }
  }

  render() {
    return (
      <div
        className="app"
        ref={app => {
          this.app = app;
        }}
      >
        <Route
          basename={"/td-db/"}
          render={({ location }) => (
            <Switch key={location.key} location={location}>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/`}
                component={Home}
                key={location.key}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/results/:q`}
                component={Results}
                key={location.key}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/show/:id`}
                component={Details}
                key={location.key}
              />
            </Switch>
          )}
        />
      </div>
    );
  }
}

export default App;
