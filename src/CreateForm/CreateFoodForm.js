import { Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import './styles.css'

function CreateFoodForm() {
  const redirect = useRef()
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const ingredientsArray = ingredients.split("\n"); // Split the ingredients string into an array
      const response = await fetch('https://backend-phase-2-project.onrender.com/foods', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          image,
          description,
          ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
        }),
      });
  
      if (response.ok) {
        console.log('Food created successfully');
        setName('');
        setImage('');
        setDescription('');
        setIngredients('');
        redirect.current.click();
      } else {
        console.error('Failed to create food');
      }
    } catch (error) {
      console.error('Error creating food:', error);
    }
  };

  return (
    <div>
      <h2 className='title'>Create Food</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Ingredients:
          <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        </label>
        <br />
        <button type="submit" className='create-but'>Create</button>
      </form>
      <Link to="/" className='none' ref={redirect}/>
    </div>
  );
}

export default CreateFoodForm;
