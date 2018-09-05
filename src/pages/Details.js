import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import Header from "../components/Header";
import Loader from "../components/Loader";

class Details extends Component {
  constructor() {
    super();

    this.fetchShowData = this.fetchShowData.bind(this);

    this.state = {
      loading: true,
      results: null
    };
  }

  componentDidMount() {
    document.title = "Show Details | TVMazeApi";

    this.fetchShowData();
  }

  fetchShowData() {
    const id = this.props.match.params.id;
    setTimeout(() => {
      fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(data => data.json())
        .then(data => {
          this.setState({ loading: false, results: data });

          document.title = `Show Details: ${
            this.state.results.name
          } | TVMazeApi`;
          this.container.focus();

          window.scrollTo(0, 0);
        });
    }, 750);
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

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
          <h1 id="pageTitle" className="details__title heading heading--1">
            {this.state.results.name}
          </h1>

          <div className="grid">
            <div className="grid__item">
              {}
              <img
                src={
                  this.state.results.image
                    ? this.state.results.image.medium
                    : `http://via.placeholder.com/210x295/000000/ffffff/?text=${
                        this.state.results.name
                      }`
                }
                alt=""
                className="details__image"
                aria-hidden="true"
              />
            </div>
            <div className="grid__item">
              <h2 className="details__subtitle heading heading--2">Summary</h2>
              {}
              {ReactHtmlParser(this.state.results.summary)}

              <h2 className="details__subtitle heading heading--2">Details</h2>
              <table className="details__table">
                <tbody>
                  {}
                  {this.state.results.id ? (
                    <tr>
                      <th scope="row">Number</th>
                      <td>{this.state.results.id}</td>
                    </tr>
                  ) : (
                    ""
                  )}
                  {}
                  {this.state.results.name ? (
                    <tr>
                      <th scope="row">Name</th>
                      <td>{this.state.results.name}</td>
                    </tr>
                  ) : (
                    ""
                  )}
                  {}
                  {this.state.results.premiered ? (
                    <tr>
                      <th scope="row">Premiered</th>
                      <td>{this.state.results.premiered}</td>
                    </tr>
                  ) : (
                    ""
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Details;
