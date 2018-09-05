import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Show extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      results: null
    };

    this.fetchShowData = this.fetchShowData.bind(this);
  }

  componentDidMount() {
    this.fetchShowData();
  }

  fetchShowData() {
    const id = this.props.showId;

    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(data => data.json())
      .then(data => {
        this.setState({ loading: false, results: data });
      });
  }

  render() {
    if (this.state.loading) {
      return null;
    }

    return (
      <Link
        to={`${process.env.PUBLIC_URL}/show/${this.state.results.id}`}
        className="show__link"
      >
        {}
        <img
          src={
            this.state.results.image
              ? this.state.results.image.medium
              : `http://via.placeholder.com/210x295/000000/ffffff/?text=${
                  this.state.results.name
                }`
          }
          alt={this.state.results.name}
          className="show__image"
        />
        {this.state.results.name}
        {this.state.results.genres.map(genre => {
          return <li key={genre}>{genre}</li>;
        })}
      </Link>
    );
  }
}

Show.PropTypes = {
  showId: PropTypes.string.isRequired
};

export default Show;
