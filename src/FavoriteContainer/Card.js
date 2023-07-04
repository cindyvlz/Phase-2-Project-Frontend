import React from 'react';
import { Link } from 'react-router-dom';

function Card({ food }) {
  const { id, name, image, description } = food;

  return (
    <div className="card mt-10">
      <h1 className="card-h1">{name}</h1>
      <Link to={`/foods/${id}`}>
        <img className="card-img" src={image} alt={name} />
      </Link>
      <p className="card-desc">{description}</p>
    </div>
  );
}

export default Card;
