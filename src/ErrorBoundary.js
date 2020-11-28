import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };
  // this is lifecycle merhod and must be exact
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // send it to api provoder (error)
    console.error("ErrorBoundry cought an Error", error, info);
  }

  // if state changes in this case hadError true call this function
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/"></Redirect>;
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here </Link>
          to go bsck yo home page or wait five seconds
        </h1>
      );
    }
    // pass all components what are passed throught children is what is inside <h1>child</h1> child is children
    return this.props.children;
  }
}
