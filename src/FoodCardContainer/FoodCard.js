import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';

function FoodCard({ food }) {
  const navigate = useNavigate();
  const { id, name, image, description, ingredients } = food;

  const details = () => {
    navigate(`/foods/${id}`);
  };

  const edit = () => {
    navigate(`/foods/update/${id}`);
  };

  const addFavorite = async () => {
    try {
      const response = await fetch('https://backend-phase-2-project.onrender.com/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          image,
          description,
          ingredients,
        }),
      });

      if (response.ok) {
        console.log('Add favorite successfully');
      } else {
        console.error('Failed to add');
      }
    } catch (error) {
      console.error('Error adding food:', error);
    }
  }

  return (
    <div className="card">
      <h1 className="card-h1">{name}</h1>
      <Link to={`/foods/${id}`}>
        <img className="card-img" src={image} alt={name} />
      </Link>
      <p className="card-desc">{description}</p>
      <button onClick={addFavorite}><i class="bi bi-star-fill"></i></button>
      <button type="button" className='detail-but' onClick={details}>Detail</button>
      <button type="button" onClick={edit}>Edit {name}</button>
    </div>
  );
}

export default FoodCard;
