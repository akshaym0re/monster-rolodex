import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  constructor() {
    super();
  }
  render() {
    const { handleChange } = this.props;
    return (
      <input
        className="search-box"
        placeholder="Search monsters"
        type="search"
        onChange={handleChange}
      />
    );
  }
}

export default SearchBox;
