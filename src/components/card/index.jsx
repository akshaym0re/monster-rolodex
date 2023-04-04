import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  constructor() {
    super();
  }
  render() {
    const { name, email, id } = this.props;
    return (
      <div key={id} className="card-container">
        <img alt={name} src={`https://robohash.org/${id}?set=set2`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
