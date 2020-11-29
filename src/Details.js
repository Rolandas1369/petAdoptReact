import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Courousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    // throw new Error("error");
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>... loading</h1>;
    }

    const { animal, breed, location, description, name, media } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal}-${breed}-${location}`}</h2>
          <ThemeContext.Consumer>
            {/* get theme from [theme, setTheme] hook */}
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundaries(props) {
  return (
    <ErrorBoundary>
      {/* Error boudary will catch errors in Details */}
      {/* Spreading props spred exampl id={props.id} example:  */}
      <Details {...props}></Details>
    </ErrorBoundary>
  );
}
