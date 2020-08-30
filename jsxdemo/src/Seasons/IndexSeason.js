import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";

class App extends React.Component {
  state = { lat: null, month: null, errorMessage: "" };

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  };

  helperResultDiv = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error Message : {this.state.errorMessage}</div>;
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loading message="Kindly accept location request" />;
  };

  render() {
    return this.helperResultDiv();
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
