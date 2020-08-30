import React from "react";

class SearchBar extends React.Component {
  state = { searchText: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearchSubmit(this.state.searchText);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.searchText}
              onChange={(e) => this.setState({ searchText: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
