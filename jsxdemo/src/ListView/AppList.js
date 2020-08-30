import React from "react";
import unsplashApi from "../api/Unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class AppList extends React.Component {
  state = { images: [] };

  handleSearchSubmit = (searchText) => {
    unsplashApi
      .get("/search/photos", {
        params: { query: searchText },
      })
      .then((response) => {
        this.setState({ images: response.data.results });
      });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
        <SearchBar handleSearchSubmit={this.handleSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default AppList;
