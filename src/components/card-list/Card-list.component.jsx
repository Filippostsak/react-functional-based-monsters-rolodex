import "./card-list-styles.css";
import Card from "../Card/Card";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <div key={monster.id}>
        <Card monster={monster} />
      </div>
    ))}
  </div>
);

export default CardList;
