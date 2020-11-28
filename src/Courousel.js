import React, { Component } from "react";

export default class Courousel extends Component {
  state = {
    photos: [],
    active: 0,
  };
  // this is lifecycle merhod and must be exact
  // get props passes selected props to state
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    // what to return to state
    return { photos };
  }

  handleIndexClick = (event) => {
    this.setState({
      // accessed in data-index
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal"></img>
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            ></img>
          ))}
        </div>
      </div>
    );
  }
}
