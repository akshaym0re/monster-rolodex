import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, id, email } = monster;
          return <Card key={id} id={id} name={name} email={email} />;
        })}
      </div>
    );
  }
}

export default CardList;
