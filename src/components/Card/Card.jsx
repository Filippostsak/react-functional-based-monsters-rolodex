import "./card.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2`}
        alt={`monster ${name}`}
      />
      <h2 className="card-h2">{name}</h2>
      <p className="card-p">{email}</p>
    </div>
  );
};

export default Card;
