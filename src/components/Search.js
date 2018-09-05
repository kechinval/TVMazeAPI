import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  constructor() {
    super();

    this.clearError = this.clearError.bind(this);
    this.floatLabel = this.floatLabel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearError() {
    if (this.error.classList.contains("search__error-text--active")) {
      this.error.classList.remove("search__error-text--active");
    }
  }

  floatLabel(e) {
    const eventType = e.type;
    const textInput = e.target;

    if (eventType === "keyup" && textInput.value.length !== 0) {
      this.labelText.classList.add("search__label-text--floating");
    }

    if (eventType === "blur" && textInput.value.length === 0) {
      this.labelText.classList.remove("search__label-text--floating");
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.q.value) {
      this.error.classList.add("search__error-text--active");

      this.q.focus();
    } else {
      this.props.history.push(
        `${process.env.PUBLIC_URL}/results/${this.q.value}`
      );
    }
  }

  render() {
    return (
      <form
        action="/"
        method="GET"
        className="search"
        role="search"
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="q" className="search__label">
          <span
            className="search__label-text"
            ref={labelText => {
              this.labelText = labelText;
            }}
          >
            Your favourite show…
          </span>
          {}
          <input
            type="search"
            name="q"
            id="q"
            placeholder="Your favourite show…"
            autoComplete="off"
            className="search__input"
            onKeyDown={this.clearError}
            onKeyUp={this.floatLabel}
            onBlur={this.floatLabel}
            ref={q => {
              this.q = q;
            }}
          />
          <span
            className="search__error-text"
            ref={error => {
              this.error = error;
            }}
          >
            No favourite show? You must have at least one! Try again.{" "}
          </span>
        </label>
        <button className="btn search__btn">Search</button>
      </form>
    );
  }
}

Search.PropTypes = {
  history: PropTypes.object.isRequired
};

export default Search;
