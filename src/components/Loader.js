import React, { Component } from "react";
import Header from "../components/Header";

class Loading extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <Header />
        <main className="main">
          {}
          <div
            className="loader"
            tabIndex="-1"
            ref={loader => {
              this.loader = loader;
            }}
          />
        </main>
      </div>
    );
  }
}

export default Loading;
