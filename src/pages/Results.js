import React, { Component } from "react";
import Header from "../components/Header";
import Show from "../components/Show";
import Loader from "../components/Loader";
import Announcements from "../components/Announcements";

class Results extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      results: null,
      q: null,
      announcementMessage: null
    };

    this.fetchShowData = this.fetchShowData.bind(this);
  }

  componentDidMount() {
    const q = this.props.match.params.q;

    document.title = `Search Results for "${q}" | TVMazeAPI`;

    this.fetchShowData(q);
  }

  fetchShowData(q) {
    setTimeout(() => {
      fetch(`https://api.tvmaze.com/search/shows?q=${q}&page=2`)
        .then(data => data.json())
        .then(data => {
          this.setState({
            loading: false,
            results: data,
            q: q,
            announcementMessage: `Total results found: ${data.length}`
          });

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
        aria-labelledby="pageTitle"
        tabIndex="-1"
        ref={container => {
          this.container = container;
        }}
      >
        <Header />
        {}
        <Announcements message={this.state.announcementMessage} />

        <main className="main">
          <h1 id="pageTitle" className="heading heading--1">
            Search Results for "{this.state.q}
            ":
          </h1>
          {}
          <ul className="show__list">
            {this.state.results.map(show => {
              return (
                <li className="show__list-item" key={show.show.id}>
                  <Show showId={show.show.id} />
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    );
  }
}

export default Results;
