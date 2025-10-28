import { Link } from "react-router-dom";

const CircuitCard = ({ name, location, imgName, slug }) => {
  return (
    <article className="circuit-card">
      <figure className="thumb">
        <img src={imgName} alt={`${name} track map`} />
      </figure>
      <h3>{name}</h3>
      <p className="location">{location}</p>
      <Link className="btn" to={`/circuit/${slug}`}>
        View Circuit
      </Link>
    </article>
  );
};

export default CircuitCard;
