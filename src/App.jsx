import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list";
import SearchBox from "./components/search-box";

class App extends Component {
  constructor() {
    super();
    this.state = { search: "", monsters: [] };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data }));
  }

  handleChange = (e) => this.setState({ search: e.target.value.toLowerCase() });

  render() {
    console.log("Render");

    const { monsters, search } = this.state;
    const { handleChange } = this;

    const filterdMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search)
    );

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox handleChange={handleChange} />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
