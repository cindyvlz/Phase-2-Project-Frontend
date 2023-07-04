import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";

export default function DetailFoods() {
  const { id } = useParams();
  const redirect = useRef();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [ingredients, setIngredients] = useState();

  useEffect(() => {
    fetchDataId(id);
  }, [id]);

  const fetchDataId = async (id) => {
    try {
      const response = await fetch(
        `https://backend-phase-2-project.onrender.com/foods/${id}`
      );
      const jsonData = await response.json();
      console.log("Response:", response);
      console.log("JSON Data:", jsonData);
      console.log("Ingredients:", jsonData.ingredients);

      setName(jsonData.name);
    setImage(jsonData.image);
    if (Array.isArray(jsonData.ingredients)) {
      setIngredients(jsonData.ingredients);
    } else if (typeof jsonData.ingredients === 'string') {
      setIngredients(jsonData.ingredients.split(','));
    } else {
      setIngredients([]);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  };

  const deleteFood = async () => {
    try {
      const response = await fetch(
        `https://backend-phase-2-project.onrender.com/foods/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Food deleted successfully");
        redirect.current.click();
      } else {
        console.error("Failed to delete food");
      }
    } catch (error) {
      console.error("Error deleting food:", error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="card-h1">
          {name}{" "}
          <button onClick={deleteFood}>
            <i className="bi bi-trash"></i>
          </button>
        </h1>
        <img className="card-img" src={image} alt={name} />
        <div className="card-desc">
          <h3>Ingredients:</h3>
          {ingredients && ingredients.length > 0 ? (
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          ) : (
            <p>No ingredients available.</p>
          )}
        </div>
      </div>
      <Link to="/" className="none" ref={redirect} />
    </div>
  );
}
