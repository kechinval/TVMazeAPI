import React, { Component } from "react";
import Header from "../components/Header";
import Search from "../components/Search";

class Home extends Component {
  componentDidMount() {
    document.title = "TVMazeApi";

    this.container.focus();

    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div
        className="container"
        tabIndex="-1"
        aria-labelledby="pageTitle"
        ref={container => {
          this.container = container;
        }}
      >
        <Header />
        <main className="main">
          <Search history={this.props.history} />
        </main>
      </div>
    );
  }
}

export default Home;
