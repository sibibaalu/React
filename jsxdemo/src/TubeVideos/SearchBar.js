import React from "react";

class SearchBar extends React.Component {
  state = { searchText: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.searchText);    
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="ui field">
            <label>Search for videos</label>
            <input
              value={this.state.text}
              onChange={(e) => this.setState({ searchText: e.target.value })}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
