import { useState, useEffect } from 'react';
import Card from './Card';
import './styles.css';

export default function FavoritesCard() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites();
  },[]);

  const getFavorites = async () => {
    try {
      const response = await fetch('https://backend-phase-2-project.onrender.com/favorites');
      const jsonData = await response.json();
      setFavorites(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div className="card-container-favorite">
      <h1 className="subtitle">Favorites</h1>
      <div className="card-favorite-row">
        { favorites.length > 0 && favorites.map((food) => (
          <Card key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}
