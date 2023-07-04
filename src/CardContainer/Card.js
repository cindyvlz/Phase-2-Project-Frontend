import {useEffect, useState} from 'react';
import FoodCard from '../FoodCardContainer/FoodCard';
import './styles.css'

function Card() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://backend-phase-2-project.onrender.com/foods');
      const jsonData = await response.json();
      setFoods(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="card-container">
    
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
        />
      ))}
    
    </div>
  );
}

export default Card;